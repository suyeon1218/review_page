import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Right = styled.div``;

export const Author = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  padding: 0px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Body = styled.div``;
