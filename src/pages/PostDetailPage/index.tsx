import { useParams } from 'react-router-dom';
import { GoBack } from '~/components';
import { MY_ID } from '~/constants';
import { commentAPI } from '~/service';
import { CommentItem, CommentInput, PostItem } from './components';
import * as S from './index.style';

const PostDetailPage = () => {
  const { id } = useParams();
  const { data: comments } = commentAPI.useGetCommentByPost(id as string);
  const createCommentMutate = commentAPI.useCreateComment();

  if (id === undefined) {
    return <div>Error</div>;
  }

  if (comments === undefined) {
    return <div>로딩중...</div>;
  }

  const handleSubmitComment = (value: string) => {
    createCommentMutate.mutate({
      comment: {
        content: value,
        author: MY_ID,
        postId: id,
        date: new Date().toISOString(),
      },
    });
  };

  return (
    <S.Container>
      <S.Header>
        <GoBack />
      </S.Header>
      <S.PostContainer>
        <PostItem postId={id} />
      </S.PostContainer>
      <S.CommentContainer>
        <CommentInput onSubmit={handleSubmitComment} />
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            commentId={comment.id}
          />
        ))}
      </S.CommentContainer>
    </S.Container>
  );
};

export default PostDetailPage;
