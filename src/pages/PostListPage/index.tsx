import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import * as S from './index.style';
import CardTable from '~/components/CardTable';
import ListTable from '~/components/ListTable';
import PostListHeader from '~/components/PostListHeader';

const PostListPage = () => {
  const { view } = useSelector((state: RootState) => state.view);

  return (
    <S.Container>
      <PostListHeader />
      <S.TableContainer>
        {view === 'LIST' ? <ListTable /> : <CardTable />}
      </S.TableContainer>
    </S.Container>
  );
};

export default PostListPage;
