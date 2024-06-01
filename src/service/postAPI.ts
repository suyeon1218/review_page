import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Post } from '~/types';
import { GET } from '../api/request';

const postAPI = {
  useGetPost: () => {
    return useQuery({
      queryKey: ['allPost'],
      queryFn: async () => {
        const response: AxiosResponse<Post[]> | undefined = await GET('/posts');

        return response;
      },
    });
  },
  useGetPostById: (id: string) => {
    return useQuery({
      queryKey: ['post'],
      queryFn: async () => {
        const response: AxiosResponse<Post> | undefined = await GET(
          `posts/${id}`
        );

        return response;
      },
    });
  },
};

export default postAPI;
