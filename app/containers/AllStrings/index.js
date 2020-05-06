/**
 *
 * AllStrings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAllStrings from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AllStrings() {
  useInjectReducer({ key: 'allStrings', reducer });
  useInjectSaga({ key: 'allStrings', saga });

  return (
    <div>
      <Helmet>
        <title>AllStrings</title>
        <meta name="description" content="Description of AllStrings" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AllStrings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allStrings: makeSelectAllStrings(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AllStrings);
