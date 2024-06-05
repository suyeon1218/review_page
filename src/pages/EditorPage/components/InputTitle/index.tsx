import { useFormContext } from 'react-hook-form';
import * as S from './index.style';

interface InputTitleProps {
  defaultValue?: string;
}

const InputTitle = ({ defaultValue = '' }: InputTitleProps) => {
  const { register } = useFormContext();

  return (
    <S.StyledInput
      {...register('title', {
        validate: (value) => value.length > 0 || '해당 필드를 채워주세요!',
      })}
      variant={'unstyled'}
      defaultValue={defaultValue}
      placeholder='제목을 입력하세요'
    />
  );
};

export default InputTitle;
