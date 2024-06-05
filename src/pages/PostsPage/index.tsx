import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { ErrorFallback, Loading } from '~/components';
import { RootState } from '~/store';
import { Header, ListTable, CardTable } from './components';
import * as S from './index.style';

const PostListPage = () => {
  const { view } = useSelector((state: RootState) => state.view);

  return (
    <S.Container>
      <Header />
      <S.Table>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            {view === 'LIST' ? <ListTable /> : <CardTable />}
          </Suspense>
        </ErrorBoundary>
      </S.Table>
    </S.Container>
  );
};

export default PostListPage;
