import { initialPost } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';

interface PostBodyProps {
  postId: string;
}

const PostBody = ({ postId }: PostBodyProps) => {
  const { data: post } = postAPI.useGetPostById(postId);
  const { content } = post ? post : initialPost;

  return (
    <S.Container>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default PostBody;
