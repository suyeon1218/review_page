import { KeyboardEvent, MouseEvent, useRef } from 'react';
import { useToastMessage } from '~/hooks';
import * as S from './index.style';

interface CommentInputProps {
  defaultValue?: string;
  onSubmit?: (value: string) => void;
}

const CommentInput = ({ onSubmit, defaultValue }: CommentInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToastMessage();

  const handleSumbit = () => {
    if (onSubmit && inputRef && inputRef.current) {
      if (inputRef.current.value.length === 0) {
        toast({
          description: '댓글은 최소 1글자 이상이어야 합니다!',
          status: 'error',
        });
        return;
      }
      if (inputRef.current.value.length === 0) {
        toast({
          description: '댓글은 최대 500글자까지 허용합니다!',
          status: 'error',
        });
        return;
      }
      onSubmit(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSumbit();
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSumbit();
    }
  };

  return (
    <S.Container>
      <S.StyledInput
        minLength={1}
        maxLength={500}
        ref={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={defaultValue}
        placeholder={'댓글을 작성해보세요!'}
      />
      <S.StyledSubmitButton onClick={handleClick}>
        댓글 쓰기
      </S.StyledSubmitButton>
    </S.Container>
  );
};

export default CommentInput;
