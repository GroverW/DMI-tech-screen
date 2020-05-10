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
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import messages from './messages';
import { addString } from './actions';
import { makeSelectStrings } from './selectors';

import NewStringForm from '../../components/NewStringForm';

export function AddNewString(props) {
  useInjectSaga({ key: 'addNewString', saga });
  console.log(props);
  return (
    <div>
      <Helmet>
        <title>AddNewString</title>
        <meta name="description" content="Description of AddNewString" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <NewStringForm addString={props.addString} />
    </div>
  );
}

AddNewString.propTypes = {
  strings: PropTypes.object,
  addString: PropTypes.func,
};

const mapStateToProps = createSelector(
  makeSelectStrings(),
  strings => ({
    strings,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    addString: data => dispatch(addString(data)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewString);
