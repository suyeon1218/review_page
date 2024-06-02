import { postAPI } from '~/service';
import CategoryBadge from '../CategoryBadge';
import Rating from '../Rating';
import * as S from './index.style';
import useFilterPost from '~/hooks/useFilterPost';
import useSortPost from '~/hooks/useSortPost';

const ListTable = () => {
  const { data: posts } = postAPI.useGetPosts();
  const filteredPosts = useFilterPost(posts);
  const sortedPosts = useSortPost(filteredPosts);

  if (sortedPosts === undefined) {
    return <div></div>;
  }

  return (
    <S.Container>
      {sortedPosts.map((post) => {
        const { id, title, category, rating } = post;
        return (
          <S.List key={id}>
            <S.ListBody>
              <S.LeftSideContainer>
                <S.ListTitle>{title}</S.ListTitle>
              </S.LeftSideContainer>
              <S.RightSideContainer>
                <Rating value={rating} />
                <CategoryBadge
                  type={category}
                  isFullWidth={true}
                />
              </S.RightSideContainer>
            </S.ListBody>
          </S.List>
        );
      })}
    </S.Container>
  );
};

export default ListTable;
