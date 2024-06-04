import { useToast } from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { MY_ID } from '~/constants';
import { postAPI } from '~/service';
import { Post } from '~/types';
import * as S from './index.style';
import GoBack from '~/components/GoBack';
import InputCategory from '~/components/InputCategory';
import InputContent from '~/components/InputContent';
import InputRating from '~/components/InputRating';
import InputTitle from '~/components/InputTitle';

const EditorPage = () => {
  const { id } = useParams();
  const toast = useToast();
  const response = id ? postAPI.useGetPostById(id) : null;
  const createMutate = postAPI.useCreatePost();
  const editMutate = postAPI.useEditPost();
  const methods = useForm<
    Pick<Post, 'title' | 'category' | 'rating' | 'content'>
  >({
    defaultValues: {
      title: response?.data?.title,
      category: response?.data?.category,
      rating: response?.data?.rating,
      content: response?.data?.content,
    },
  });

  const handleSubmitForm = async (event: MouseEvent<HTMLButtonElement>) => {
    const { errors } = methods.formState;
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      toast({
        description: '빈 필드들을 채워주세요!',
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true,
      });
    } else {
      const post = methods.getValues();

      id === undefined
        ? createMutate.mutate({
            post: { ...post, date: new Date().toISOString(), author: MY_ID },
          })
        : editMutate.mutate({ postId: id, post });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <GoBack />
        <S.SubmitButton onClick={handleSubmitForm}>발행하기</S.SubmitButton>
      </S.Header>
      <S.Form>
        <FormProvider {...methods}>
          <S.FormProperty>
            <S.TitleRow>
              <InputTitle defaultValue={response?.data?.title} />
            </S.TitleRow>
            <S.CategoryRow>
              <InputCategory defaultValue={response?.data?.category} />
            </S.CategoryRow>
            <S.RatingRow>
              <InputRating defaultValue={response?.data?.rating} />
            </S.RatingRow>
          </S.FormProperty>
          <S.FormBody>
            <InputContent defaultValue={response?.data?.content} />
          </S.FormBody>
        </FormProvider>
      </S.Form>
    </S.Container>
  );
};

export default EditorPage;
