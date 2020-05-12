/**
 *
 * Tests for BorderLink
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithRouter } from '../../../tests/helpers/testHelper';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import BorderLink from '../index';

describe('<BorderLink />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRouter(<BorderLink to="" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRouter(<BorderLink to="" />);
    expect(firstChild).toMatchSnapshot();
  });
});
