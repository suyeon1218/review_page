import { Badge, Card, CardHeader } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const List = styled(Card)`
  width: 70%;
  box-shadow: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ListBody = styled(CardHeader)`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const ListBodyLeft = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ListBodyRight = styled.div`
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ListTitle = styled.div``;

export const ListCategory = styled(Badge)`
  width: 100px;
  font-weight: normal;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 16px;
  text-align: center;
`;
