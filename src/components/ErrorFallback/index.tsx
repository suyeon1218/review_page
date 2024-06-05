import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
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
      <div>페이지를 불러올 수 없습니다! 다시 시도해주세요!</div>
      <div>
        <S.StyledButton onClick={handleClickButton}>
          {buttonLabel}
        </S.StyledButton>
      </div>
    </S.Container>
  );
};

export default ErrorFallback;
