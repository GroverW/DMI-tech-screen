/**
 *
 * Tests for AddNewString
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
import { addString } from '../actions';

import { AddNewString, mapDispatchToProps } from '../index';
import { DEFAULT_LOCALE } from '../../../../i18n';

describe('<AddNewString />', () => {
  let store;
  let mockTheme;
  let resetStatuses;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
    resetStatuses = jest.fn();

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
          <AddNewString
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            resetStatuses={resetStatuses}
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
          <AddNewString
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            resetStatuses={resetStatuses}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should not reset statuses if loading and error are false', () => {
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AddNewString
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            resetStatuses={resetStatuses}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(resetStatuses).not.toHaveBeenCalled();
  });

  it('Should load the body content', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AddNewString
            loading={false}
            errors={false}
            loaded={false}
            theme={mockTheme}
            resetStatuses={resetStatuses}
          />
        </IntlProvider>
      </Provider>,
    );

    expect(queryByText('Add a New String')).toBeInTheDocument();
    expect(queryByText('Add String')).toBeInTheDocument();
  });

  describe('mapDispatchToProps', () => {
    describe('addString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.addString).toBeDefined();
      });

      it('should dispatch addString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'test';
        result.addString(string);

        expect(dispatch).toHaveBeenCalledWith(addString(string));
      });
    });
  });
});
