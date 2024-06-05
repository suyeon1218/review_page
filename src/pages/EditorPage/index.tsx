import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { GoBack } from '~/components';
import { MY_ID } from '~/constants';
import { useToastMessage } from '~/hooks';
import { postAPI } from '~/service';
import { Post } from '~/types';
import {
  InputContent,
  InputCategory,
  InputRating,
  InputTitle,
} from './components';
import * as S from './index.style';

const EditorPage = () => {
  const { id } = useParams();
  const formErrorToast = useToastMessage('빈 필드를 채워주세요!', 'error');

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

  const handleSubmitForm = async () => {
    const { getValues, trigger } = methods;
    const post = getValues();
    const result = await trigger(['title', 'content']);

    if (result === false) {
      formErrorToast();
    } else {
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
          <S.FormHeader>
            <S.TitleRow>
              <InputTitle defaultValue={response?.data?.title} />
            </S.TitleRow>
            <S.CategoryRow>
              <InputCategory defaultValue={response?.data?.category} />
            </S.CategoryRow>
            <S.RatingRow>
              <InputRating defaultValue={response?.data?.rating} />
            </S.RatingRow>
          </S.FormHeader>
          <S.FormBody>
            <InputContent defaultValue={response?.data?.content} />
          </S.FormBody>
        </FormProvider>
      </S.Form>
    </S.Container>
  );
};

export default EditorPage;
