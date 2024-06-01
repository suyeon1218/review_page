import { postAPI } from '~/service';
import * as S from './index.style';

const ListTable = () => {
  const { data: posts } = postAPI.useGetPosts();

  if (posts === undefined) {
    return <div></div>;
  }
  return (
    <S.Container>
      <S.List>
        <S.ListBody>
          <S.ListTitle>{posts[0].title}</S.ListTitle>
          <S.ListCategory colorScheme='blue'>
            {posts[0].category}
          </S.ListCategory>
        </S.ListBody>
      </S.List>
    </S.Container>
  );
};

export default ListTable;
