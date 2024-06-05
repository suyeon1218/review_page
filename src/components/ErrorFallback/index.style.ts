import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  font-size: 24px;
`;

export const StyledButton = styled(Button)`
  cursor: pointer;
`;
