import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { Post } from '~/types';
import { copy } from '~/utils/copy';

const useSortPost = (posts: Post[] | undefined) => {
  const { sort } = useSelector((state: RootState) => state.sort);
  const sortedPosts = posts ? copy.copyArray(posts) : undefined;

  if (sortedPosts && sort === 'DATE_DESCENDING') {
    sortedPosts.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  }

  return sortedPosts;
};

export default useSortPost;
