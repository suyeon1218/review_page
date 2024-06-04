import { AddIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '~/store';
import * as S from './index.style';
import CardTable from '~/components/CardTable';
import ListTable from '~/components/ListTable';
import MenuFilter from '~/components/MenuFilter';
import MenuSort from '~/components/MenuSort';
import MenuView from '~/components/MenuView';
import SearchBar from '~/components/SearchBar';

const PostListPage = () => {
  const { view } = useSelector((state: RootState) => state.view);

  return (
    <S.Container>
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
            <S.WriteButton>
              <Link to='/write'>
                <AddIcon />
              </Link>
            </S.WriteButton>
          </Tooltip>
        </S.HeaderRight>
      </S.Header>
      <S.Table>{view === 'LIST' ? <ListTable /> : <CardTable />}</S.Table>
    </S.Container>
  );
};

export default PostListPage;
