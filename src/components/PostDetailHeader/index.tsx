import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';

const PostDetailHeader = () => {
  const navigate = useNavigate();

  return (
    <S.Container
      onClick={() => {
        navigate(-1);
      }}>
      <ArrowBackIcon />
      <div>뒤로 가기</div>
    </S.Container>
  );
};

export default PostDetailHeader;
