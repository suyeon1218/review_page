import { Badge } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface StyledBadgeProps {
  isFullWidth: boolean;
}

export const StyledBadge = styled(Badge)<StyledBadgeProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2px 5px;
  width: ${({ isFullWidth }) => (isFullWidth ? '100px' : 'fit-content')};
`;
