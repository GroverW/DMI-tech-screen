import React from 'react';
import { render } from 'react-testing-library';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

export function renderWithRouter(children, initialPath = '') {
  const history = createMemoryHistory();
  if (initialPath) history.push(initialPath);
  return render(<Router history={history}>{children}</Router>);
}
