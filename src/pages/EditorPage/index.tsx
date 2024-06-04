import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { postAPI } from '~/service';
import * as S from './index.style';
import GoBack from '~/components/GoBack';
import InputCategory from '~/components/InputCategory';
import InputContent from '~/components/InputContent';
import InputRating from '~/components/InputRating';
import InputTitle from '~/components/InputTitle';

const EditorPage = () => {
  const { id } = useParams();
  const response = id ? postAPI.useGetPostById(id) : undefined;
  const methods = useForm();

  return (
    <S.Container>
      <S.Header>
        <GoBack />
        <S.SubmitButton>발행하기</S.SubmitButton>
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
