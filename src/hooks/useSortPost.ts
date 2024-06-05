import { useSelector } from 'react-redux';
import { RootState } from '~/store';
import { Post } from '~/types';
import { copy } from '~/utils/copy';

const useSortPost = (posts: Post[]) => {
  const { sort } = useSelector((state: RootState) => state.sort);
  const sortedPosts = copy.copyArray(posts);

  if (sortedPosts) {
    if (sort === 'DATE_DESCENDING') {
      sortedPosts.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      });
    } else if (sort === 'RATING_ASCENDING') {
      sortedPosts.sort((a, b) => a.rating - b.rating);
    } else if (sort === 'RATING_DESCENDING') {
      sortedPosts.sort((a, b) => b.rating - a.rating);
    }
  }

  return sortedPosts;
};

export default useSortPost;
