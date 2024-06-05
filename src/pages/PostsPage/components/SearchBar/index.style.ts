import { Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledInput = styled(Input)`
  width: 400px;
  height: 50px;

  @media screen and (max-width: 768px) {
    flex-grow: 1;
    height: 40px;
  }
`;
