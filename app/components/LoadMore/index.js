/**
 *
 * LoadMore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import MoreButton from './MoreButton';
import messages from './messages';

function LoadMore(props) {
  return (
    <MoreButton type="button" theme={props.theme} onClick={props.onClick}>
      <FormattedMessage {...messages.main} />
    </MoreButton>
  );
}

LoadMore.propTypes = {
  theme: PropTypes.object,
  onClick: PropTypes.func,
};

export default LoadMore;
