/**
 *
 * AllStrings
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { compose } from 'redux';

import ListItem from 'components/ListItem';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeGetTheme } from 'containers/SetThemeProvider/selectors';
import { makeGetStrings } from '../selectors';
import reducer, { REDUCER_KEY } from '../reducer';
import saga from './saga';
import { loadStrings } from './actions';
import messages from './messages';

export function AllStrings(props) {
  useInjectReducer({ key: REDUCER_KEY, reducer });
  useInjectSaga({ key: 'allStrings', saga });

  useEffect(() => {
    if (!props.strings.length) props.loadStrings(props.strings.length);
  }, []);

  return (
    <div>
      <Helmet>
        <title>AllStrings</title>
        <meta name="description" content="Description of AllStrings" />
      </Helmet>
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
      {props.strings.length &&
        props.strings.map(string => (
          <ListItem theme={props.theme.colors} key={string.id}>
            {string.text}
          </ListItem>
        ))}
      <button
        type="button"
        onClick={() => props.loadStrings(props.strings.length)}
      >
        Load More
      </button>
    </div>
  );
}

AllStrings.propTypes = {
  strings: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  theme: PropTypes.object,
  loadStrings: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeGetStrings(),
  makeGetTheme(),
  (strings, theme) => ({
    strings: strings.list,
    loading: strings.loading,
    error: strings.error,
    theme,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    loadStrings: data => dispatch(loadStrings(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AllStrings);
