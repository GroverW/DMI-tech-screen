/**
 * A form button
 */

import styled from 'styled-components';

const Button = styled.button`
  color: white;
  padding: 7px 10px;
  background-color: ${props => props.theme.primary};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.buttonBorder};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.primaryHover};
  }
  &:focus {
    background-color: ${props => props.theme.primaryFocus};
    outline: none;
  }
`;

export default Button;
