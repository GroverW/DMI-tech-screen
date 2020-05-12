/**
 *
 * Alert
 *
 */

import styled from 'styled-components';

const types = {
  error: '#f24e4e',
  success: '#2ab060',
};

const Alert = styled.span`
  display: block;
  padding: 10px;
  margin-top: 10px;
  color: white;
  background-color: ${props => types[props.type]};
  border-radius: 5px;
`;

export default Alert;
