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

import HomePage from 'containers/HomePage/Loadable';
import AddNewString from 'containers/AddNewString';
import AllStrings from 'containers/AllStrings';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from '../../components/Navbar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/strings" component={AllStrings} />
        <Route exact path="/strings/new" component={AddNewString} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
