import { AddIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { Sort, Filter, View } from '~/types';

import MenuFilter from '../MenuFilter';
import MenuSort from '../MenuSort';
import MenuView from '../MenuView';
import SearchBar from '../SearchBar';
import * as S from './index.style';

interface TalbeHeaderProps {
  view: View;
  setView: (view: View) => void;
  filter: Filter[];
  setFilter: (filter: Filter[]) => void;
  sort: Sort;
  setSort: (sort: Sort) => void;
  inputKeyword: string;
  setInputKeyword: (keyword: string) => void;
}

const TableHeader = ({
  view,
  setView,
  filter,
  setFilter,
  sort,
  setSort,
  inputKeyword,
  setInputKeyword,
}: TalbeHeaderProps) => {
  return (
    <S.Container>
      <S.LeftSideContainer>
        <S.TableTitle>영화 리뷰</S.TableTitle>
      </S.LeftSideContainer>
      <S.CenterContainer>
        <SearchBar
          value={inputKeyword}
          onChange={setInputKeyword}
        />
      </S.CenterContainer>
      <S.RightSideContainer>
        <MenuFilter
          value={filter}
          onChange={setFilter}
        />
        <MenuSort
          value={sort}
          onChange={setSort}
        />
        <MenuView
          value={view}
          onChange={setView}
        />
        <Tooltip label='글 작성'>
          <S.WriteButtonContainer>
            <AddIcon />
          </S.WriteButtonContainer>
        </Tooltip>
      </S.RightSideContainer>
    </S.Container>
  );
};

export default TableHeader;
