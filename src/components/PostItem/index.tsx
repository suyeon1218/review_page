import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MY_ID } from '~/constants';
import { postAPI, scrapAPI } from '~/service';
import CategoryBadge from '../CategoryBadge';
import Rating from '../Rating';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface PostHeaderProps {
  postId: string;
}

const PostItem = ({ postId }: PostHeaderProps) => {
  const navigate = useNavigate();
  const { data: post, isError } = postAPI.useGetPostById(postId);
  const { data: myScrap } = scrapAPI.useGetScrapByUserId(MY_ID);
  const matchedScrapedPost =
    myScrap && myScrap.find((scrap) => scrap.postId === postId);

  const deleteScrapMutate = scrapAPI.useDeleteScrapById();
  const createScrapMutate = scrapAPI.useCreateScrap();
  const deletePostMutate = postAPI.useDeletePost();

  if (post === undefined) {
    return <div>Loaindg...</div>;
  }

  if (isError) {
    alert('존재하지 않는 페이지입니다');
    navigate('/');
    throw new Error('404');
  }

  const { title, rating, author, category, date, content } = post;

  const handleChangeScrapStatus = () => {
    if (matchedScrapedPost) {
      deleteScrapMutate.mutate({ scrapId: matchedScrapedPost.id });
    } else {
      createScrapMutate.mutate({
        scrap: {
          userId: MY_ID,
          postId,
        },
      });
    }
  };

  const handleClickDeleteButton = () => {
    if (confirm('리뷰를 삭제할까요?')) {
      deletePostMutate.mutate({ postId });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.TitleRow>
          <S.Title>{title}</S.Title>
          <S.Scrap onClick={handleChangeScrapStatus}>
            <StarIcon color={matchedScrapedPost ? 'yellow.300' : 'gray'} />
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
          {MY_ID === author && (
            <S.RightSideContainer>
              <S.StyledButton>
                <Link to={`/write/${postId}`}>수정</Link>
              </S.StyledButton>
              <S.StyledButton onClick={handleClickDeleteButton}>
                삭제
              </S.StyledButton>
            </S.RightSideContainer>
          )}
        </S.EtcRow>
      </S.Header>
      <S.Body>{content}</S.Body>
    </S.Container>
  );
};

export default PostItem;
