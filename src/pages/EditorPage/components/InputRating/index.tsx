import { Controller, useFormContext } from 'react-hook-form';
import Rating from '../../../../components/Rating';

interface InputRatingProps {
  defaultValue?: 1 | 2 | 3 | 4 | 5;
}

const InputRating = ({ defaultValue = 1 }: InputRatingProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={'rating'}
      control={control}
      defaultValue={defaultValue}
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
