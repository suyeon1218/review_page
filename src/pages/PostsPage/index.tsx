import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { Header, ListTable, CardTable } from './components';
import * as S from './index.style';

const PostListPage = () => {
  const { view } = useSelector((state: RootState) => state.view);

  return (
    <S.Container>
      <Header />
      <S.Table>{view === 'LIST' ? <ListTable /> : <CardTable />}</S.Table>
    </S.Container>
  );
};

export default PostListPage;
