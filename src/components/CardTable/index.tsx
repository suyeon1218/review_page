import { Link } from 'react-router-dom';
import { postAPI } from '~/service';
import CategoryBadge from '../CategoryBadge';
import Rating from '../Rating';
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
        const { id, title, category, content, rating } = post;

        return (
          <S.StyledCard key={id}>
            <Link to={`/posts/${id}`}>
              <S.StyledCardHeader>
                <S.CardTitle>{title}</S.CardTitle>
                <Rating value={rating} />
                <CategoryBadge type={category} />
              </S.StyledCardHeader>
              <S.StyledCardBody>
                <S.CardContent>{content}</S.CardContent>
              </S.StyledCardBody>
            </Link>
          </S.StyledCard>
        );
      })}
    </S.Container>
  );
};

export default CardTable;
