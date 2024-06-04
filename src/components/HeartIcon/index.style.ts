import styled from '@emotion/styled';

interface ContainerProps {
  isFilled: boolean;
}

export const Container = styled.span<ContainerProps>`
  font-size: 32px;
  color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.red[500] : theme.colors.gray[300]};
`;
