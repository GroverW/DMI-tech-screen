/**
 *
 * Tests for AllStrings
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../../configureStore';
import 'jest-dom/extend-expect'; // add some helpful assertions
import { loadStrings } from '../actions';

import { AllStrings, mapDispatchToProps } from '../index';
import { DEFAULT_LOCALE } from '../../../../i18n';

describe('<AllStrings />', () => {
  let store;
  let mockTheme;

  beforeAll(() => {
    store = configureStore({}, browserHistory);

    mockTheme = {
      name: '',
      colors: {},
    };
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AllStrings
            strings={[]}
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            loadStrings={loadStrings}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AllStrings
            strings={[]}
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            loadStrings={loadStrings}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should load the body content', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AllStrings
            strings={[]}
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            loadStrings={loadStrings}
          />
        </IntlProvider>
      </Provider>,
    );

    expect(queryByText('Latest Strings')).toBeInTheDocument();
    expect(queryByText('Load More')).toBeInTheDocument();
  });

  describe('mapDispatchToProps', () => {
    describe('loadStrings', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.loadStrings).toBeDefined();
      });

      it('should dispatch loadStrings when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'test';
        result.loadStrings(string);

        expect(dispatch).toHaveBeenCalledWith(loadStrings(string));
      });
    });
  });
});
