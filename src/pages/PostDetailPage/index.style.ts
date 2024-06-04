import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  align-items: center;
`;

export const Content = styled.div`
  width: 70%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Post = styled(Content)``;

export const Comment = styled(Content)`
  margin: 20px auto;
`;
