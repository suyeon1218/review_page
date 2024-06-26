import { Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CategoryBadge, HeartIcon, Rating } from '~/components';
import { MY_ID } from '~/constants';
import { postAPI, likeAPI } from '~/service';
import * as S from './index.style';
import { YYYYMMDD } from '~/utils/date';

interface PostHeaderProps {
  postId: string;
}

const PostItem = ({ postId }: PostHeaderProps) => {
  const { data: post } = postAPI.useGetPostById(postId);
  const { data: myLike } = likeAPI.useGetLikeByUserId(MY_ID);
  const myLikedPosts = myLike && myLike.find((like) => like.postId === postId);

  const deleteLikeMutate = likeAPI.useDeleteLikeById();
  const createLikeMutate = likeAPI.useCreateLike();
  const deletePostMutate = postAPI.useDeletePost();

  const { title, rating, author, category, date, content } = post;

  const handleChangeLikeStatus = () => {
    if (myLikedPosts) {
      deleteLikeMutate.mutate({ likeId: myLikedPosts.id });
    } else {
      createLikeMutate.mutate({
        like: {
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
          <Tooltip label='좋아요'>
            <S.Like onClick={handleChangeLikeStatus}>
              <HeartIcon isFilled={!!myLikedPosts} />
            </S.Like>
          </Tooltip>
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
