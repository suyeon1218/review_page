import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { Post } from '~/types';

function useFilterPost(posts: Post[] | undefined) {
  const { keyword, category } = useSelector((state: RootState) => state.filter);
  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => {
      if (keyword.length === 0 && category.length === 0) return true;
      if (keyword.length > 0 && category.length === 0) {
        if (post.title.match(keyword)) {
          return true;
        }
      }
      if (keyword.length === 0 && category.length > 0) {
        if (category.includes(post.category)) {
          return true;
        }
      }
    });
  }, [keyword, category, posts]);

  return filteredPosts;
}

export default useFilterPost;
