import { BADEG_COLOR } from '~/constants';
import { MovieCategory } from '~/types';
import * as S from './index.style';

interface CategoryBadgeProps {
  type: MovieCategory;
  isFullWidth?: boolean;
}

const CategoryBadge = ({ type, isFullWidth = false }: CategoryBadgeProps) => {
  return (
    <S.StyledBadge
      isFullWidth={isFullWidth}
      colorScheme={BADEG_COLOR[type]}>
      {type}
    </S.StyledBadge>
  );
};

export default CategoryBadge;
