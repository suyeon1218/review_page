import { Badge, Card, CardBody, CardHeader } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 20px auto;
  display: grid;
  width: 80%;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
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

export const StyledCardBody = styled(CardBody)``;

export const CardContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
