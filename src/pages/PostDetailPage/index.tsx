import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import { ErrorFallback, GoBack, Loading } from '~/components';
import { MY_ID } from '~/constants';
import { commentAPI } from '~/service';
import { CommentItem, CommentInput, PostItem } from './components';
import * as S from './index.style';

const PostDetailPage = () => {
  const { id } = useParams();
  const { data: comments } = commentAPI.useGetCommentByPost(id as string);
  const createCommentMutate = commentAPI.useCreateComment();

  if (id === undefined) {
    throw new Error('올바른 경로가 아니에요!');
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
      </ErrorBoundary>
    </S.Container>
  );
};

export default PostDetailPage;
