/**
 * TextInput
 */

import styled from 'styled-components';

const TextInput = styled.input`
  flex-grow: 1;
  padding: 5px 10px;
  margin-right: 5px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.font};
`;

export default TextInput;
