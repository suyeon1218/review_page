import { StarIcon } from '@chakra-ui/icons';
import { MY_ID, initialPost } from '~/constants';
import { postAPI, scrapAPI } from '~/service';
import CategoryBadge from '../CategoryBadge';
import Rating from '../Rating';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface PostHeaderProps {
  id: string;
}

const PostHeader = ({ id }: PostHeaderProps) => {
  const { data: post } = postAPI.useGetPostById(id);
  const { data: myScrap } = scrapAPI.useGETScrapByUserId(MY_ID);
  const { title, rating, author, category, date, scrap } = post
    ? post
    : initialPost;
  const scrapedPostsId = myScrap?.map((scrap) => scrap.postId);

  return (
    <S.Container>
      <S.TitleRow>
        <S.Title>{title}</S.Title>
        <S.Scrap>
          <StarIcon
            color={
              scrapedPostsId && scrapedPostsId.includes(Number(id))
                ? 'yellow.300'
                : 'gray'
            }
          />
          <div>{scrap}</div>
        </S.Scrap>
      </S.TitleRow>
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
          <S.StyledButton>수정</S.StyledButton>
          <S.StyledButton>삭제</S.StyledButton>
        </S.RightSideContainer>
      </S.EtcRow>
    </S.Container>
  );
};

export default PostHeader;
