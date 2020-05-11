/**
 *
 * AddNewString
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { compose } from 'redux';

import ContentContainer from 'components/ContentContainer';
import Alert from 'components/Alert';
import NewStringForm from 'components/NewStringForm';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeGetTheme } from 'containers/SetThemeProvider/selectors';
import { makeGetStrings } from '../selectors';
import reducer, { REDUCER_KEY } from '../reducer';
import saga from './saga';
import { addString } from './actions';
import messages from './messages';

export function AddNewString(props) {
  useInjectReducer({ key: REDUCER_KEY, reducer });
  useInjectSaga({ key: 'addNewString', saga });

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
        <NewStringForm theme={props.theme.colors} addString={props.addString} />
        {props.strings.error !== '' && (
          <Alert type="error">{props.strings.error}</Alert>
        )}
      </ContentContainer>
    </div>
  );
}

AddNewString.propTypes = {
  strings: PropTypes.object,
  theme: PropTypes.object,
  addString: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeGetStrings(),
  makeGetTheme(),
  (strings, theme) => ({
    strings,
    theme,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    addString: data => dispatch(addString(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddNewString);
