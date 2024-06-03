import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
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
