import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
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

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PageTitle = styled.div`
  font-size: 24px;
  flex-shrink: 0;
  font-weight: bold;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const WriteButton = styled.div`
  min-width: 30px;
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

export const Table = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
