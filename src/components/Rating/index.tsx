import { StarIcon } from '@chakra-ui/icons';
import * as S from './index.style';

interface RatingProps {
  value: 0 | 1 | 2 | 3 | 4 | 5;
}

const Rating = ({ value }: RatingProps) => {
  return (
    <S.Container>
      <StarIcon color={value > 0 ? 'yellow.300' : 'gray'} />
      <StarIcon color={value > 1 ? 'yellow.300' : 'gray'} />
      <StarIcon color={value > 2 ? 'yellow.300' : 'gray'} />
      <StarIcon color={value > 3 ? 'yellow.300' : 'gray'} />
      <StarIcon color={value > 4 ? 'yellow.300' : 'gray'} />
    </S.Container>
  );
};

export default Rating;
