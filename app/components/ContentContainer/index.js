/**
 *
 * ContentContainer
 *
 */

import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 15px 15px;
  margin: 0px auto;
  max-width: 600px;
  border: 1px solid ${props => props.theme.border || 'transparent'};
  border-radius: 5px;
`;

export default ContentContainer;
