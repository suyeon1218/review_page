import { BADEG_COLOR } from '~/constants';
import { postAPI } from '~/service';
import * as S from './index.style';
import useFilterPost from '~/hooks/useFilterPost';

const ListTable = () => {
  const { data: posts } = postAPI.useGetPosts();
  const filteredPosts = useFilterPost(posts);

  if (filteredPosts === undefined) {
    return <div></div>;
  }
  return (
    <S.Container>
      {filteredPosts.map((post) => {
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
