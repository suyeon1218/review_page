import { Badge, Card, CardBody, CardHeader } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 20px auto;
  display: grid;
`;

export const StyledCard = styled(Card)`
  width: 250px;
  height: 200px;

  &:hover {
    box-shadow: 3px 3px 10px ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const StyledCardHeader = styled(CardHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const CardTitle = styled.div`
  font-weight: bold;
`;

export const CardCategory = styled(Badge)`
  border-radius: 5px;
`;

export const StyledCardBody = styled(CardBody)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
