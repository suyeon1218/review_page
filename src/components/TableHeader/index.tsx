import { AddIcon } from '@chakra-ui/icons';
import { Sort, Filter, View } from '~/types';

import MenuFilter from '../MenuFilter';
import MenuSort from '../MenuSort';
import MenuView from '../MenuView';
import * as S from './index.style';

interface TalbeHeaderProps {
  view: View;
  setView: (view: View) => void;
  filter: Filter[];
  setFilter: (filter: Filter[]) => void;
  sort: Sort | undefined;
  setSort: (sort: Sort | undefined) => void;
}

const TableHeader = ({
  view,
  setView,
  filter,
  setFilter,
  sort,
  setSort,
}: TalbeHeaderProps) => {
  return (
    <S.Container>
      <S.LeftSideContainer>
        <S.TableTitle>영화 리뷰</S.TableTitle>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        <MenuFilter />
        <MenuSort />
        <MenuView
          value={view}
          onChange={setView}
        />
        <S.WriteButtonContainer>
          <AddIcon />
        </S.WriteButtonContainer>
      </S.RightSideContainer>
    </S.Container>
  );
};

export default TableHeader;
