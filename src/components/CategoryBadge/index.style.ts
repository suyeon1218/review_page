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
  padding: 2px;
  border-radius: 5px;
  width: ${({ isFullWidth }) => (isFullWidth ? '100px' : 'fit-content')};
`;
