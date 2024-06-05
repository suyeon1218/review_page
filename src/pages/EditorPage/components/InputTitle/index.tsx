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
        validate: {
          minLength: (value) => value.length > 0 || '제목 필드를 채워주세요!',
          maxLength: (value) =>
            value.length <= 100 || '제목은 최대 100글자 까지 허용합니다!',
        },
      })}
      variant={'unstyled'}
      defaultValue={defaultValue}
      placeholder='제목을 입력하세요'
    />
  );
};

export default InputTitle;
