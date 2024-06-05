import styled from '@emotion/styled';

interface ContainerProps {
  readonly: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  gap: 2px;
  cursor: ${({ readonly }) => (readonly ? 'default' : 'pointer')};
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
