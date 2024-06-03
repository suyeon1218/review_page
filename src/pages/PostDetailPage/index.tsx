import { useParams } from 'react-router-dom';
import { initialPost } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';
import CommentInput from '~/components/CommentInput';
import CommentItem from '~/components/CommentItem';
import GoBack from '~/components/GoBack';
import PostBody from '~/components/PostBody';
import PostHeader from '~/components/PostHeader';

const PostDetailPage = () => {
  const { id } = useParams();
  const { data: post } = postAPI.useGetPostById(id as string);
  const { comments } = post ? post : initialPost;

  return (
    <S.Container>
      <GoBack />
      <S.Post>
        <PostHeader />
        <PostBody />
      </S.Post>
      <S.Comment>
        <CommentInput />
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </S.Comment>
    </S.Container>
  );
};

export default PostDetailPage;
