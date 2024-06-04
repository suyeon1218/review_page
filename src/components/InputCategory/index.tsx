import { Radio, RadioGroup } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { MOVIE_CATEGORY } from '~/constants';
import { MovieCategory } from '~/types';

interface InputCategoryProps {
  defaultValue?: MovieCategory;
}

const InputCategory = ({ defaultValue = 'ROMANCE' }: InputCategoryProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={'category'}
      control={control}
      render={({ field: { onChange } }) => (
        <RadioGroup
          defaultValue={defaultValue}
          onChange={onChange}>
          {Object.entries(MOVIE_CATEGORY).map(([key, value]) => (
            <Radio
              key={key}
              value={key}>
              {value}
            </Radio>
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default InputCategory;
