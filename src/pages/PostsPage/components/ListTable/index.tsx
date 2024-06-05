import { Link } from 'react-router-dom';
import { CategoryBadge, Rating } from '~/components';
import { useFilterPost, useSortPost } from '~/hooks';
import { postAPI } from '~/service';
import * as S from './index.style';

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
            <Link to={`/posts/${id}`}>
              <S.ListBody>
                <S.ListBodyLeft>
                  <S.ListTitle>{title}</S.ListTitle>
                </S.ListBodyLeft>
                <S.ListBodyRight>
                  <Rating value={rating} />
                  <CategoryBadge
                    type={category}
                    isFullWidth={true}
                  />
                </S.ListBodyRight>
              </S.ListBody>
            </Link>
          </S.List>
        );
      })}
    </S.Container>
  );
};

export default ListTable;
