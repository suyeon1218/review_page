import { Controller, useFormContext } from 'react-hook-form';
import { MOVIE_CATEGORY } from '~/constants';
import { MovieCategory } from '~/types';
import * as S from './index.style';

interface InputCategoryProps {
  defaultValue?: MovieCategory;
}

const InputCategory = ({ defaultValue = 'ROMANCE' }: InputCategoryProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={'category'}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <S.StyledRadioGroup
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}>
          {Object.entries(MOVIE_CATEGORY).map(([key, value]) => (
            <S.StyledRadio
              key={key}
              value={key}>
              {value}
            </S.StyledRadio>
          ))}
        </S.StyledRadioGroup>
      )}
    />
  );
};

export default InputCategory;
