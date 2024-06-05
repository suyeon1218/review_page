import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { Post } from '~/types';

function useFilterPost(posts: Post[]) {
  const { filterValue, category } = useSelector(
    (state: RootState) => state.filter
  );
  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => {
      if (filterValue.length === 0 && category.length === 0) return true;
      if (filterValue.length > 0 && category.length === 0) {
        if (post.title.match(filterValue)) {
          return true;
        }
      }
      if (filterValue.length === 0 && category.length > 0) {
        if (category.includes(post.category)) {
          return true;
        }
      }
    });
  }, [filterValue, category, posts]);

  return filteredPosts;
}

export default useFilterPost;
