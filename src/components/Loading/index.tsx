import { Spinner } from '@chakra-ui/react';
import * as S from './index.style';

const Loading = () => {
  return (
    <S.Container>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </S.Container>
  );
};

export default Loading;
