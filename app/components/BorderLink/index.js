/**
 *
 * BorderLink
 *
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BorderLink = styled(Link)`
  padding: 7px 10px;
  margin: 0px 10px;
  color: ${props => props.theme.font};
  border: 2px solid ${props => props.theme.buttonBorder};
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.primaryHover};
    color: white;
  }
  &:focus {
    background-color: ${props => props.theme.primaryFocus};
    color: white;
  }
`;

export default BorderLink;
