/**
 *
 * AddNewString
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
import Alert from 'components/Alert';
import NewStringForm from 'components/NewStringForm';
import Loading from 'components/Loading';

// injectors
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// selectors, reducers, sagas, actions
import { makeGetTheme } from 'containers/Themes/selectors';
import { makeGetStrings } from '../selectors';
import reducer, { REDUCER_KEY } from '../reducer';
import saga from './saga';
import { resetStatuses } from '../actions';
import { addString } from './actions';

import messages from './messages';

export function AddNewString(props) {
  useInjectReducer({ key: REDUCER_KEY, reducer });
  useInjectSaga({ key: 'addNewString', saga });

  // resetStatuses to remove status messages
  useEffect(() => {
    if (props.loaded || props.errors) props.resetStatuses();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Add New String</title>
        <meta name="description" content="Description of AddNewString" />
      </Helmet>
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
      <ContentContainer>
        <FormattedMessage {...messages.body} />
        <NewStringForm theme={props.theme} addString={props.addString} />

        {props.errors &&
          props.errors.map(error => (
            <Alert key={error} type="error">
              {error}
            </Alert>
          ))}

        {props.loaded && (
          <Alert type="success">
            <FormattedMessage {...messages.success} />
          </Alert>
        )}

        {props.loading && <Loading />}
      </ContentContainer>
    </div>
  );
}

AddNewString.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  theme: PropTypes.object,
  addString: PropTypes.func,
  resetStatuses: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeGetStrings(),
  makeGetTheme(),
  (strings, theme) => ({
    loading: strings.loading,
    loaded: strings.loaded,
    errors: strings.error,
    theme: theme.colors,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    addString: data => dispatch(addString(data)),
    resetStatuses: () => dispatch(resetStatuses()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddNewString);
