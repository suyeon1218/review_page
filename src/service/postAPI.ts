import { useQuery } from '@tanstack/react-query';
import { Post } from '~/types';
import { GET } from '../api/request';

const postAPI = {
  useGetPosts: () => {
    return useQuery({
      queryKey: ['allPost'],
      queryFn: async () => {
        const response = await GET<Post[]>('/posts');

        return response;
      },
    });
  },
  useGetPostById: (id: string) => {
    return useQuery({
      queryKey: ['post'],
      queryFn: async () => {
        const response = await GET<Post>(`posts/${id}`);

        return response;
      },
    });
  },
};

export default postAPI;
