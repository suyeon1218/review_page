import { ViewType } from '~/types';
import ViewMenu from '../ViewMenu';
import * as S from './index.style';

interface TalbeHeaderProps {
  view: ViewType;
  onChange?: (props: ViewType) => void;
}

const TableHeader = ({ view, onChange }: TalbeHeaderProps) => {
  return (
    <S.Container>
      <S.LeftSideContainer>
        <S.TableTitle>영화 리뷰</S.TableTitle>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        <ViewMenu
          view={view}
          onChange={onChange}
        />
        <S.WriteButtonContainer>
          <S.WriteButton>작성하기</S.WriteButton>
        </S.WriteButtonContainer>
      </S.RightSideContainer>
    </S.Container>
  );
};

export default TableHeader;
