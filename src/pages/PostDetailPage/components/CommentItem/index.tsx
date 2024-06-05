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
    setEditMode(!editMode);
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
        <S.HeaderLeft>
          <S.Author>{author}</S.Author>
          <S.Date>{YYYYMMDD(date)}</S.Date>
        </S.HeaderLeft>
        {MY_ID === author && (
          <S.HeaderRight>
            <S.StyledButton onClick={handleClickEditButton}>
              {editMode ? '취소' : '수정'}
            </S.StyledButton>
            <S.StyledButton onClick={handleClickDeleteButton}>
              삭제
            </S.StyledButton>
          </S.HeaderRight>
        )}
      </S.Header>
      <S.Body>
        {editMode === true && (
          <CommentInput
            onSubmit={handleSubmitEditedComment}
            defaultValue={content}
          />
        )}
        {editMode === false && content}
      </S.Body>
    </S.Container>
  );
};

export default CommentItem;
