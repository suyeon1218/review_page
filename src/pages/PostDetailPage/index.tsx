import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { GoBack, Loading } from '~/components';
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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </S.Container>
  );
};

export default PostDetailPage;
