import { useEffect, useState } from 'react';
import { MY_ID } from '~/constants';
import { commentAPI } from '~/service';
import CommentInput from '../CommentInput';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface CommentItem {
  commentId: string;
}

const CommentItem = ({ commentId }: CommentItem) => {
  const [editMode, setEditMode] = useState(false);
  const { data: comment } = commentAPI.useGetCommentById(commentId);
  const deleteMutate = commentAPI.useDeleteComment();
  const editMutate = commentAPI.useEditComment();

  useEffect(() => {
    setEditMode(false);
  }, [editMutate.isSuccess]);

  if (comment === undefined) {
    return <div>Loading...</div>;
  }

  const { author, date, content } = comment;

  const handleClickEditButton = () => {
    setEditMode(true);
  };

  const handleClickDeleteButton = () => {
    if (confirm('댓글을 삭제할까요?')) {
      deleteMutate.mutate({ commentId });
    }
  };

  const handleSubmitEditedComment = (value: string) => {
    editMutate.mutate({ commentId, content: value });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Left>
          <S.Author>{author}</S.Author>
          <S.Date>{YYYYMMDD(date)}</S.Date>
        </S.Left>
        {MY_ID === author && (
          <S.Right>
            {editMode === false && (
              <S.StyledButton onClick={handleClickEditButton}>
                수정
              </S.StyledButton>
            )}
            <S.StyledButton onClick={handleClickDeleteButton}>
              삭제
            </S.StyledButton>
          </S.Right>
        )}
      </S.Header>
      <S.Body>
        {editMode ? (
          <CommentInput
            onSubmit={handleSubmitEditedComment}
            defaultValue={content}
          />
        ) : (
          content
        )}
      </S.Body>
    </S.Container>
  );
};

export default CommentItem;
