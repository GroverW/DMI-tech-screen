/**
 * A generic anchor tag
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeLink = styled(Link)`
  padding: 5px 10px;
  margin-right: auto;
  color: ${props => props.theme.font};
  text-decoration: none;
`;

export default HomeLink;
