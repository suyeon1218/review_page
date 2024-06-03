import { Comment } from '~/types';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface CommentItem {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItem) => {
  const { author, date, content } = comment;

  return (
    <S.Container>
      <S.Header>
        <S.Left>
          <S.Author>{author}</S.Author>
          <S.Date>{YYYYMMDD(date)}</S.Date>
        </S.Left>
        <S.Right>
          <S.StyledButton>수정</S.StyledButton>
          <S.StyledButton>삭제</S.StyledButton>
        </S.Right>
      </S.Header>
      <S.Body>{content}</S.Body>
    </S.Container>
  );
};

export default CommentItem;
