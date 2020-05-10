/**
 *
 * ThemeToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { makeSelectSetTheme } from '../../containers/SetThemeProvider/selectors';
import { themes } from '../../containers/SetThemeProvider/themes';
import { setTheme } from '../../containers/SetThemeProvider/actions';
import Toggle from './Toggle';

function ThemeToggle(props) {
  return (
    <div>
      <Toggle
        theme={props.theme.colors}
        value={props.theme.name}
        onChange={props.onThemeChange}
      >
        {Object.keys(themes).map(theme => (
          <option key={theme} id={theme} value={theme}>
            {theme}
          </option>
        ))}
      </Toggle>
    </div>
  );
}

ThemeToggle.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

const mapStateToProps = createSelector(
  makeSelectSetTheme(),
  theme => ({
    theme,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onThemeChange: evt => dispatch(setTheme(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeToggle);
