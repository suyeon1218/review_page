import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { pathname, reload } = location;
  const navigate = useNavigate();
  const buttonLabel = pathname === '/' ? '새로고침' : '뒤로 가기';

  const handleClickButton = () => {
    resetErrorBoundary();

    if (pathname === '/') {
      reload();
    } else if (pathname.startsWith('/posts')) {
      navigate('/');
    }
  };

  return (
    <S.Container>
      <S.IconContainer>🚨</S.IconContainer>
      <div>{error.message}</div>
      <div>
        <S.StyledButton onClick={handleClickButton}>
          {buttonLabel}
        </S.StyledButton>
      </div>
    </S.Container>
  );
};

export default ErrorFallback;
