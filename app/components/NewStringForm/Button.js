/**
 * A form button
 */

import styled from 'styled-components';

const Button = styled.button`
  color: white;
  padding: 5px 10px;
  background-color: white;

  &:hover {
    color: rgb(0, 0, 0);
  }
  &.active {
    text-decoration: underline;
  }
`;

export default Button.button;
