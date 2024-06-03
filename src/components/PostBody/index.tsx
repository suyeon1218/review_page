import { initialPost } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';

interface PostBodyProps {
  id: string;
}

const PostBody = ({ id }: PostBodyProps) => {
  const { data: post } = postAPI.useGetPostById(id as string);
  const { content } = post ? post : initialPost;

  return (
    <S.Container>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default PostBody;
