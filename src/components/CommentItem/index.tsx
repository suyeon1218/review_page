import { initialComment } from '~/constants';
import { commentAPI } from '~/service';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface CommentItem {
  commentId: string;
}

const CommentItem = ({ commentId }: CommentItem) => {
  const { data: comment } = commentAPI.useGetCommentById(commentId);
  const { author, date, content } = comment ? comment : initialComment;
  const deleteMutate = commentAPI.useDeleteComment();

  const handleClickDeleteButton = () => {
    if (confirm('댓글을 삭제할까요?')) {
      deleteMutate.mutate({ commentId });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Left>
          <S.Author>{author}</S.Author>
          <S.Date>{YYYYMMDD(date)}</S.Date>
        </S.Left>
        <S.Right>
          <S.StyledButton>수정</S.StyledButton>
          <S.StyledButton onClick={handleClickDeleteButton}>
            삭제
          </S.StyledButton>
        </S.Right>
      </S.Header>
      <S.Body>{content}</S.Body>
    </S.Container>
  );
};

export default CommentItem;
