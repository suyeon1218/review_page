import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 768px;
  width: 90%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const WriteButtonContainer = styled.div``;

export const WriteButton = styled(Button)`
  width: 120px;
  height: 50px;
`;
