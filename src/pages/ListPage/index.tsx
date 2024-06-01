import { useState } from 'react';
import { Sort, Filter, View } from '~/types';
import * as S from './index.style';
import TableHeader from '~/components/TableHeader';

const ListPage = () => {
  const [view, setView] = useState<View>('LIST');
  const [filter, setFilter] = useState<Filter[]>([]);
  const [sort, setSort] = useState<Sort | undefined>(undefined);

  return (
    <S.Container>
      <TableHeader
        view={view}
        setView={setView}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      {/* {view === 'list' ? <ListTable /> : <CardTable />} */}
    </S.Container>
  );
};

export default ListPage;
