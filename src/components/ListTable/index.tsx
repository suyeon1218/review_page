import { BADEG_COLOR } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';

const ListTable = () => {
  const { data: posts } = postAPI.useGetPosts();

  if (posts === undefined) {
    return <div></div>;
  }
  return (
    <S.Container>
      {posts.map((post) => {
        const { id, title, category } = post;
        return (
          <S.List key={id}>
            <S.ListBody>
              <S.ListTitle>{title}</S.ListTitle>
              <S.ListCategory colorScheme={BADEG_COLOR[category]}>
                {category}
              </S.ListCategory>
            </S.ListBody>
          </S.List>
        );
      })}
    </S.Container>
  );
};

export default ListTable;
