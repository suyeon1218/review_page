import { useState } from 'react';
import { ViewType } from '~/types';
import * as S from './index.style';
import TableHeader from '~/components/TableHeader';

const ListPage = () => {
  const [view, setView] = useState<ViewType>('list');

  return (
    <S.Container>
      <TableHeader
        view={view}
        onChange={setView}
      />
    </S.Container>
  );
};

export default ListPage;
