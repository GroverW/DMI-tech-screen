/**
 * ListItem
 */

import styled from 'styled-components';

const ListItem = styled.div`
  padding: 20px 15px;
  margin: 15px auto;
  width: 100%;
  border-left: 3px solid ${props => props.theme.buttonBorder};
  text-align: left;
  background-color: ${props => props.theme.backgroundSubtle};
  border-radius: 0 5px 5px 0;
`;

export default ListItem;
