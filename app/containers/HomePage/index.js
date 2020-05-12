/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import BorderLink from 'components/BorderLink';
import { FormattedMessage } from 'react-intl';

import { makeGetTheme } from '../Themes/selectors';
import messages from './messages';

import { ALL_STRINGS, ADD_STRING } from '../App/urls';

function HomePage(props) {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <h4>
        <FormattedMessage {...messages.subHeading} />
      </h4>
      <p>
        <BorderLink theme={props.theme} to={ALL_STRINGS}>
          <FormattedMessage {...messages.viewAllText} />
        </BorderLink>
        <BorderLink theme={props.theme} to={ADD_STRING}>
          <FormattedMessage {...messages.addNewText} />
        </BorderLink>
      </p>
    </>
  );
}

HomePage.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeGetTheme(),
  theme => ({
    theme: theme.colors,
  }),
);

export default connect(mapStateToProps)(HomePage);
