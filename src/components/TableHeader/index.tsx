import { AddIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import MenuFilter from '../MenuFilter';
import MenuSort from '../MenuSort';
import MenuView from '../MenuView';
import SearchBar from '../SearchBar';
import * as S from './index.style';

const TableHeader = () => {
  return (
    <S.Container>
      <S.LeftSideContainer>
        <S.TableTitle>영화 리뷰</S.TableTitle>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        <SearchBar />
        <MenuFilter />
        <MenuSort />
        <MenuView />
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
