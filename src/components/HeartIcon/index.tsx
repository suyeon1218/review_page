import * as S from './index.style';

interface HeartIconProps {
  isFilled: boolean;
}

const HeartIcon = ({ isFilled }: HeartIconProps) => {
  return (
    <S.Container
      isFilled={isFilled}
      className='material-icons'>
      favorite
    </S.Container>
  );
};

export default HeartIcon;
