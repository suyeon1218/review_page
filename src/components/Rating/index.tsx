import { StarIcon } from '@chakra-ui/icons';
import { MouseEvent, useState } from 'react';
import * as S from './index.style';

interface RatingProps {
  value?: 0 | 1 | 2 | 3 | 4 | 5;
  readonly?: boolean;
  onChange?: () => void;
}

const Rating = ({ value = 0, readonly = true }: RatingProps) => {
  const [rating, setRating] = useState<number>(value);

  const handleClickIcon = (event: MouseEvent<HTMLDivElement>) => {
    if (readonly) return;
    if (event.target instanceof Element) {
      const $span = event.target.closest('span') as HTMLSpanElement;
      const { rating } = $span.dataset;

      if (rating) {
        setRating(Number(rating));
      }
    }
  };

  return (
    <S.Container onClick={handleClickIcon}>
      <span data-rating={1}>
        <StarIcon color={rating > 0 ? 'yellow.300' : 'gray'} />
      </span>
      <span data-rating={2}>
        <StarIcon color={rating > 1 ? 'yellow.300' : 'gray'} />
      </span>
      <span data-rating={3}>
        <StarIcon color={rating > 2 ? 'yellow.300' : 'gray'} />
      </span>
      <span data-rating={4}>
        <StarIcon color={rating > 3 ? 'yellow.300' : 'gray'} />
      </span>
      <span data-rating={5}>
        <StarIcon color={rating > 4 ? 'yellow.300' : 'gray'} />
      </span>
    </S.Container>
  );
};

export default Rating;
