/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import AddNewString from 'containers/Strings/AddNewString';
import AllStrings from 'containers/Strings/AllStrings';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { makeGetTheme } from '../Themes/selectors';
import Navbar from '../../components/Navbar';

import GlobalStyle from '../../global-styles';

import { ALL_STRINGS, ADD_STRING } from './urls';

function App(props) {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={ALL_STRINGS} component={AllStrings} />
        <Route exact path={ADD_STRING} component={AddNewString} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle theme={props.theme} />
    </div>
  );
}

App.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeGetTheme(),
  theme => ({
    theme: theme.colors,
  }),
);

export default connect(mapStateToProps)(App);
