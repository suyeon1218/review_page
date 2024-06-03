import { useParams } from 'react-router-dom';
import { initialPost } from '~/constants';
import { postAPI } from '~/service';
import CategoryBadge from '../CategoryBadge';
import Rating from '../Rating';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

const PostHeader = () => {
  const { id } = useParams();
  const { data: post } = postAPI.useGetPostById(id as string);
  const { title, rating, author, category, date } = post ? post : initialPost;

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.CategoryRow>
        <CategoryBadge type={category} />
      </S.CategoryRow>
      <S.RatingRow>
        <Rating value={rating} />
      </S.RatingRow>
      <S.EtcRow>
        <S.LeftSideContainer>
          <S.Author>{author}</S.Author>
          <div>{YYYYMMDD(date)}</div>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <div>수정</div>
          <div>삭제</div>
        </S.RightSideContainer>
      </S.EtcRow>
    </S.Container>
  );
};

export default PostHeader;