import { BADEG_COLOR } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';
import useFilterPost from '~/hooks/useFilterPost';

const CardTable = () => {
  const { data: posts } = postAPI.useGetPosts();
  const filteredPosts = useFilterPost(posts);

  if (filteredPosts === undefined) {
    return <div></div>;
  }

  return (
    <S.Container>
      {filteredPosts.map((post) => {
        const { id, title, category, content } = post;

        return (
          <S.StyledCard key={id}>
            <S.StyledCardHeader>
              <S.CardTitle>{title}</S.CardTitle>
              <S.CardCategory colorScheme={BADEG_COLOR[category]}>
                {category}
              </S.CardCategory>
            </S.StyledCardHeader>
            <S.StyledCardBody>
              <S.CardContent>{content}</S.CardContent>
            </S.StyledCardBody>
          </S.StyledCard>
        );
      })}
    </S.Container>
  );
};

export default CardTable;
