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
`;

export const ListBody = styled(CardHeader)`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const ListTitle = styled.div``;

export const ListCategory = styled(Badge)`
  font-weight: normal;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 16px;
`;
