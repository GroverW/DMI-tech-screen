import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
