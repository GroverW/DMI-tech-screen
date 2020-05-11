/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { makeGetTheme } from '../../containers/SetThemeProvider/selectors';
import Nav from '../Nav';
import HomeLink from '../HomeLink';
import HeaderLink from '../HeaderLink';
import ThemeToggle from '../ThemeToggle';

import { ALL_STRINGS, ADD_STRING } from '../../containers/App/urls';

function Header(props) {
  return (
    <Nav theme={props}>
      <HomeLink theme={props.theme} to="/">
        <FormattedMessage {...messages.home} />
      </HomeLink>
      <HeaderLink theme={props.theme} exact to={ALL_STRINGS}>
        <FormattedMessage {...messages.viewAll} />
      </HeaderLink>
      <HeaderLink theme={props.theme} exact to={ADD_STRING}>
        <FormattedMessage {...messages.addNew} />
      </HeaderLink>
      <ThemeToggle />
    </Nav>
  );
}

Header.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeGetTheme(),
  theme => ({
    theme: theme.colors,
  }),
);

export default connect(mapStateToProps)(Header);
