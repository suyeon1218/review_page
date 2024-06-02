import { postAPI } from '~/service';
import * as S from './index.style';

const ListTable = () => {
  const { data: posts } = postAPI.useGetPosts();

  if (posts === undefined) {
    return <div></div>;
  }
  return (
    <S.Container>
      {posts.map((post) => (
        <S.List key={post.id}>
          <S.ListBody>
            <S.ListTitle>{post.title}</S.ListTitle>
            <S.ListCategory colorScheme='blue'>{post.category}</S.ListCategory>
          </S.ListBody>
        </S.List>
      ))}
    </S.Container>
  );
};

export default ListTable;
