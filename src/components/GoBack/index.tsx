import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '~/constants';
import * as S from './index.style';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        navigate(ROUTER.POSTS);
      }}>
      <ArrowBackIcon />
      <div>뒤로 가기</div>
    </S.Container>
  );
};

export default GoBack;
