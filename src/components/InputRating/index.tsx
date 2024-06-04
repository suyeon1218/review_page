import { Controller, useFormContext } from 'react-hook-form';
import Rating from '../Rating';

interface InputRatingProps {
  defaultValue?: 0 | 1 | 2 | 3 | 4 | 5;
}

const InputRating = ({ defaultValue = 0 }: InputRatingProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={'rating'}
      control={control}
      render={({ field: { onChange } }) => (
        <Rating
          value={defaultValue}
          readonly={false}
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputRating;
