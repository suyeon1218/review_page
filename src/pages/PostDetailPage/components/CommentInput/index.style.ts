import { Button, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const StyledInput = styled(Input)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const StyledSubmitButton = styled(Button)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
