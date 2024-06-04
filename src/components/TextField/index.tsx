import { ChangeEvent, useRef, useState } from 'react';
import * as S from './index.style';

interface TextFieldProps {
  value?: string;
  placeholder?: string;
  onChange?: (inputValue: string) => void;
}

const TextField = ({
  value = '',
  placeholder = '',
  onChange,
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChangeinputValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
    if (onChange) {
      const { value } = event.target;
      setInputValue(value);
      onChange(value);
    }
  };

  return (
    <S.Container>
      <S.TextArea
        ref={textareaRef}
        placeholder={placeholder}
        onChange={handleChangeinputValue}
        value={inputValue}></S.TextArea>
    </S.Container>
  );
};

export default TextField;
