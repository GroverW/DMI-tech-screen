/**
 *
 * Style MoreButton for MoreButton component
 *
 */

import styled from 'styled-components';

const MoreButton = styled.button`
  margin: 15px 0px;
  padding: 7px 30px;
  color: white;
  background-color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.buttonBorder};
  border-radius: 0px 0px 20px 20px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.primaryHover};
  }
  &:focus {
    background-color: ${props => props.theme.primaryFocus};
  }
`;

export default MoreButton;
