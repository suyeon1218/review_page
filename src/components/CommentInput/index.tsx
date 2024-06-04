import { MouseEvent, useRef } from 'react';
import * as S from './index.style';

interface CommentInputProps {
  defaultValue?: string;
  onSubmit?: (value: string) => void;
}

const CommentInput = ({ onSubmit, defaultValue }: CommentInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitComment = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (onSubmit && inputRef && inputRef.current) {
      onSubmit(inputRef.current.value);
    }
  };

  return (
    <S.Container>
      <S.StyledInput
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={'댓글을 작성해보세요!'}
      />
      <S.StyledSubmitButton onClick={handleSubmitComment}>
        댓글 쓰기
      </S.StyledSubmitButton>
    </S.Container>
  );
};

export default CommentInput;
