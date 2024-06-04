import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import * as S from './index.style';

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
        <S.StyledInput
          variant={'unstyled'}
          defaultValue={defaultValue}
          placeholder='제목을 입력하세요'
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputTitle;
