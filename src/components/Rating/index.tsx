import { StarIcon } from '@chakra-ui/icons';
import { MouseEvent, useEffect, useState } from 'react';
import * as S from './index.style';

interface RatingProps {
  value?: 1 | 2 | 3 | 4 | 5;
  readonly?: boolean;
  onChange?: (rating: number) => void;
}

const Rating = ({ value = 1, readonly = true, onChange }: RatingProps) => {
  const [rating, setRating] = useState<number>(1);

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handleClickIcon = (event: MouseEvent<HTMLDivElement>) => {
    if (readonly) return;
    if (event.target instanceof Element) {
      const $span = event.target.closest('span') as HTMLSpanElement;
      const { rating } = $span.dataset;

      if (rating) {
        setRating(Number(rating));
        onChange && onChange(Number(rating));
      }
    }
  };

  return (
    <S.Container
      readonly={readonly}
      onClick={handleClickIcon}>
      <S.IconContainer data-rating={1}>
        <StarIcon color={rating > 0 ? 'yellow.300' : 'gray'} />
      </S.IconContainer>
      <S.IconContainer data-rating={2}>
        <StarIcon color={rating > 1 ? 'yellow.300' : 'gray'} />
      </S.IconContainer>
      <S.IconContainer data-rating={3}>
        <StarIcon color={rating > 2 ? 'yellow.300' : 'gray'} />
      </S.IconContainer>
      <S.IconContainer data-rating={4}>
        <StarIcon color={rating > 3 ? 'yellow.300' : 'gray'} />
      </S.IconContainer>
      <S.IconContainer data-rating={5}>
        <StarIcon color={rating > 4 ? 'yellow.300' : 'gray'} />
      </S.IconContainer>
    </S.Container>
  );
};

export default Rating;
