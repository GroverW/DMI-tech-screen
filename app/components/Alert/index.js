/**
 *
 * Alert
 *
 */

import styled from 'styled-components';

const types = {
  error: '#f24e4e',
  success: '',
  warning: '',
};

const Alert = styled.span`
  display: block;
  padding: 5px 10px;
  margin-top: 10px;
  color: white;
  background-color: ${props => types[props.type]};
  border-radius: 5px;
`;

export default Alert;
