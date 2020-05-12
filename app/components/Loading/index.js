/**
 *
 * Loading
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Loading() {
  return (
    <div>
      <FontAwesomeIcon icon="cog" size="2x" spin />
      <br />
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
