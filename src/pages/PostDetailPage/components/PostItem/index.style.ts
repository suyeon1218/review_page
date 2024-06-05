import { Badge, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
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

export const TitleRow = styled(Col)`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CategoryRow = styled(Col)``;

export const RatingRow = styled(Col)``;

export const EtcRow = styled(Col)`
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

export const StyledButton = styled(Button)`
  background-color: transparent;
  padding: 0px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
