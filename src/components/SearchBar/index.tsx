import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setKeyword } from '~/store';
import * as S from './index.style';

const SearchBar = () => {
  const { keyword } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof Element) {
      const { value } = event.target;

      dispatch(setKeyword({ keyword: value }));
    }
  };

  return (
    <S.StyledInput
      placeholder='제목으로 리뷰를 검색해보세요!'
      value={keyword}
      size={'md'}
      onChange={handleChangeInput}
    />
  );
};

export default SearchBar;
