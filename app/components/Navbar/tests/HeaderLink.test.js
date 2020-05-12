/**
 *
 * Tests for HeaderLink
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { renderWithRouter } from '../../../tests/helpers/testHelper';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import HeaderLink from '../HeaderLink';

describe('<HeaderLink />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRouter(<HeaderLink to="" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRouter(<HeaderLink to="" />);
    expect(firstChild).toMatchSnapshot();
  });
});
