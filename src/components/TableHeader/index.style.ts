import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 90%;
  min-height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    gap: 10px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TableTitle = styled.div`
  font-size: 24px;
  flex-shrink: 0;
  font-weight: bold;
`;

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
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
