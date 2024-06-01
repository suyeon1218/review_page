import { ChangeEvent } from 'react';
import * as S from './index.style';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target instanceof Element) {
      const { value } = event.target;

      onChange(value);
    }
  };

  return (
    <S.StyledInput
      placeholder='키워드를 입력해보세요.'
      value={value}
      size={'md'}
      onChange={handleChangeInput}
    />
  );
};

export default SearchBar;
