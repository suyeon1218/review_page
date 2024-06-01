import { useState } from 'react';
import { Sort, Filter, View } from '~/types';
import * as S from './index.style';
import CardTable from '~/components/CardTable';
import ListTable from '~/components/ListTable';
import TableHeader from '~/components/TableHeader';

const ListPage = () => {
  const [view, setView] = useState<View>('LIST');
  const [filter, setFilter] = useState<Filter[]>([]);
  const [sort, setSort] = useState<Sort>('DATE_ASCENDING');
  const [inputKeyword, setInputKeyword] = useState('');

  return (
    <S.Container>
      <TableHeader
        view={view}
        setView={setView}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        inputKeyword={inputKeyword}
        setInputKeyword={setInputKeyword}
      />
      {view === 'LIST' ? <ListTable /> : <CardTable />}
    </S.Container>
  );
};

export default ListPage;
