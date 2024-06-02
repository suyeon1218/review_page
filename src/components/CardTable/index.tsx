import { postAPI } from '~/service';
import * as S from './index.style';

const CardTable = () => {
  const { data: posts } = postAPI.useGetPosts();

  if (posts === undefined) {
    return <div></div>;
  }

  return (
    <S.Container>
      {posts.map((post) => (
        <S.StyledCard key={post.id}>
          <S.StyledCardHeader>
            <S.CardTitle>{post.title}</S.CardTitle>
            <S.CardCategory>{post.category}</S.CardCategory>
          </S.StyledCardHeader>
          <S.StyledCardBody>
            <S.CardContent>{post.content}</S.CardContent>
          </S.StyledCardBody>
        </S.StyledCard>
      ))}
    </S.Container>
  );
};

export default CardTable;
