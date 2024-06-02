import { Badge } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Col = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  @media screen and (max-width: 768px) {
    padding: 0px 5px;
  }
`;

export const Title = styled(Col)`
  font-size: 24px;
  font-weight: bold;
`;

export const FirstRow = styled(Col)`
  display: flex;
  align-items: center;
`;

export const SecondRow = styled(Col)`
  justify-content: space-between;
`;

export const styledBadge = styled(Badge)`
  border-radius: 5px;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Author = styled.div`
  font-weight: bold;
`;

export const RightSideContainer = styled.div`
  display: flex;
  gap: 5px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
