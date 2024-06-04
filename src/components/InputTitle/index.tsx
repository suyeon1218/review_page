import { Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface InputTitleProps {
  defaultValue?: string;
}

const InputTitle = ({ defaultValue = '' }: InputTitleProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name='title'
      control={control}
      render={({ field: { onChange } }) => (
        <Input
          defaultValue={defaultValue}
          placeholder='제목을 입력하세요'
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputTitle;
