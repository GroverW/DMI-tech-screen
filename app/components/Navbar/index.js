/**
 *
 * Navbar
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">
        <FormattedMessage {...messages.home} />
      </NavLink>
      <NavLink exact to="/strings">
        <FormattedMessage {...messages.viewAll} />
      </NavLink>
      <NavLink exact to="/strings/new">
        <FormattedMessage {...messages.addNew} />
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
