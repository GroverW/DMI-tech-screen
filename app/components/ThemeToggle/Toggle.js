/**
 * A dropdown selector
 */

import styled from 'styled-components';

const Toggle = styled.select`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.font};
  border: 1px solid ${props => props.theme.buttonBorder};

  &:hover {
    cursor: pointer;
  }
`;

export default Toggle;
