/**
 *
 * Tests for Navbar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';
import { renderWithRouter } from '../../../tests/helpers/testHelper';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Navbar from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Navbar />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRouter(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Navbar />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRouter(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Navbar />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
