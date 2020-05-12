import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';
import { renderWithRouter } from '../../../tests/helpers/testHelper';

import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRouter(
      <Provider store={store}>
        <IntlProvider locale="en">
          <NotFoundPage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
