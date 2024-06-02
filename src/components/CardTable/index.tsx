import { postAPI } from '~/service';
import * as S from './index.style';

const CardTable = () => {
  const { data: posts } = postAPI.useGetPosts();

  if (posts === undefined) {
    return <div></div>;
  }

  return (
    <S.Container>
      {
        <S.StyledCard>
          <S.StyledCardHeader>
            <S.CardTitle>{posts[0].title}</S.CardTitle>
            <S.CardCategory>{posts[0].category}</S.CardCategory>
          </S.StyledCardHeader>
          <S.StyledCardBody>{posts[0].content}</S.StyledCardBody>
        </S.StyledCard>
      }
    </S.Container>
  );
};

export default CardTable;
