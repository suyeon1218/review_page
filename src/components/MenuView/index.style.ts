import { MenuButton, MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledMenuButton = styled(MenuButton)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 5px;
`;
