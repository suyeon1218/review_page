import { AddIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SearchBar, MenuFilter, MenuSort, MenuView } from '../index';
import * as S from './index.style';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLeft>
        <S.PageTitle>영화 리뷰</S.PageTitle>
      </S.HeaderLeft>
      <S.HeaderRight>
        <SearchBar />
        <MenuFilter />
        <MenuSort />
        <MenuView />
        <Tooltip label='글 작성'>
          <S.IconContainer>
            <Link to='/write'>
              <AddIcon />
            </Link>
          </S.IconContainer>
        </Tooltip>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
