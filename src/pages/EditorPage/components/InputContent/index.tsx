import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../../../../components/TextField';

interface InputContentProps {
  defaultValue?: string;
}

const InputContent = ({ defaultValue = '' }: InputContentProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name='content'
      rules={{
        required: true && '본문 필드를 채워주세요!',
      }}
      control={control}
      render={({ field: { onChange } }) => (
        <TextField
          value={defaultValue}
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputContent;
