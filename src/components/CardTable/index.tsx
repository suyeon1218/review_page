import { BADEG_COLOR } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';
import useFilterPost from '~/hooks/useFilterPost';
import useSortPost from '~/hooks/useSortPost';

const CardTable = () => {
  const { data: posts } = postAPI.useGetPosts();
  const filteredPosts = useFilterPost(posts);
  const sortedPosts = useSortPost(filteredPosts);

  if (sortedPosts === undefined) {
    return <div></div>;
  }

  return (
    <S.Container>
      {sortedPosts.map((post) => {
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
