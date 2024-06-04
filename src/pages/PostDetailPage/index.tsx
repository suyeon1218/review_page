import { useParams } from 'react-router-dom';
import { MY_ID } from '~/constants';
import { commentAPI } from '~/service';
import * as S from './index.style';
import CommentInput from '~/components/CommentInput';
import CommentItem from '~/components/CommentItem';
import GoBack from '~/components/GoBack';
import PostItem from '~/components/PostItem';

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
      <S.Post>
        <PostItem postId={id} />
      </S.Post>
      <S.Comment>
        <CommentInput onSubmit={handleSubmitComment} />
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            commentId={comment.id}
          />
        ))}
      </S.Comment>
    </S.Container>
  );
};

export default PostDetailPage;
