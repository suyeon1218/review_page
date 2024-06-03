import { useParams } from 'react-router-dom';
import { commentAPI } from '~/service';
import * as S from './index.style';
import CommentInput from '~/components/CommentInput';
import CommentItem from '~/components/CommentItem';
import GoBack from '~/components/GoBack';
import PostItem from '~/components/PostItem';

const PostDetailPage = () => {
  const { id } = useParams();
  const { data: comments } = commentAPI.useGetCommentByPost(id as string);

  if (id === undefined) {
    return <div>Error</div>;
  }

  if (comments === undefined) {
    return <div>로딩중...</div>;
  }

  return (
    <S.Container>
      <GoBack />
      <S.Post>
        <PostItem postId={id} />
      </S.Post>
      <S.Comment>
        <CommentInput />
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
