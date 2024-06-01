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
  position: relative;
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

export const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const WriteButtonContainer = styled.div`
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

export const WriteButton = styled(Button)`
  width: 120px;
  height: 50px;
`;
