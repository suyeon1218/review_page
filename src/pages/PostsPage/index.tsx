import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '~/components';
import { RootState } from '~/store';
import { Header, ListTable, CardTable } from './components';
import * as S from './index.style';

const PostListPage = () => {
  const { view } = useSelector((state: RootState) => state.view);

  return (
    <S.Container>
      <Header />
      <S.Table>
        <Suspense fallback={<Loading />}>
          {view === 'LIST' ? <ListTable /> : <CardTable />}
        </Suspense>
      </S.Table>
    </S.Container>
  );
};

export default PostListPage;
