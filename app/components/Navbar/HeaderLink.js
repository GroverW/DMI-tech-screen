/**
 * A generic anchor tag
 */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderLink = styled(NavLink)`
  color: ${props => props.theme.font};
  text-decoration: none;
  padding: 0px 5px;
  margin: 0px 10px;
  line-height: 24px;
  height: 30px;

  &:hover,
  &.active {
    border-bottom: 4px solid ${props => props.theme.buttonBorder};
  }
`;

export default HeaderLink;
