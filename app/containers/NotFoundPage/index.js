/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import BorderLink from '../../components/BorderLink';

import { makeGetTheme } from '../Themes/selectors';
import messages from './messages';

function NotFound(props) {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <BorderLink to="/" theme={props.theme}>
          <FormattedMessage {...messages.buttonText} />
        </BorderLink>
      </p>
    </>
  );
}

NotFound.propTypes = {
  theme: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeGetTheme(),
  theme => ({
    theme: theme.colors,
  }),
);

export default connect(mapStateToProps)(NotFound);
