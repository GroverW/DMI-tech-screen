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

// components
import ContentContainer from 'components/ContentContainer';
import ListItem from 'components/ListItem';
import Loading from 'components/Loading';
import LoadMore from 'components/LoadMore';
import Alert from 'components/Alert';

// injectors
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// selectors, reducers, sagas and actions
import { makeGetTheme } from 'containers/Themes/selectors';
import { makeGetStrings } from '../selectors';
import reducer, { REDUCER_KEY } from '../reducer';
import saga from './saga';
import { loadStrings } from './actions';

import messages from './messages';

export function AllStrings(props) {
  useInjectReducer({ key: REDUCER_KEY, reducer });
  useInjectSaga({ key: 'allStrings', saga });

  useEffect(() => {
    const stringsLoaded = props.strings.length;

    // only load if none have been loaded previously
    if (!stringsLoaded) props.loadStrings(stringsLoaded);
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

      <ContentContainer>
        {props.strings.length > 0 &&
          props.strings.map(string => (
            <ListItem theme={props.theme} key={string.id}>
              {string.text}
            </ListItem>
          ))}

        {props.loading && <Loading />}

        {props.errors &&
          props.errors.map(error => (
            <Alert key={error} type="error">
              {error}
            </Alert>
          ))}

        {props.loaded ? (
          <p>
            <FormattedMessage {...messages.complete} />
          </p>
        ) : (
          <LoadMore
            theme={props.theme}
            onClick={() => props.loadStrings(props.strings.length)}
          />
        )}
      </ContentContainer>
    </div>
  );
}

AllStrings.propTypes = {
  strings: PropTypes.array,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  theme: PropTypes.object,
  loadStrings: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeGetStrings(),
  makeGetTheme(),
  (strings, theme) => ({
    strings: strings.list,
    loading: strings.loading,
    loaded: strings.loaded,
    errors: strings.error,
    theme: theme.colors,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    loadStrings: data => dispatch(loadStrings(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AllStrings);
