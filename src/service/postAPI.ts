import { useMutation, useQuery } from '@tanstack/react-query';
import { Post } from '~/types';
import { DELETE, GET, POST, PATCH } from '../api/request';

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
  useGetPostById: (postId: number | string) => {
    return useQuery({
      queryKey: [`post`],
      queryFn: async () => {
        const response = await GET<Post>(`/posts/${postId}`);

        return response;
      },
    });
  },
  useCreatePost: (data: Post) => {
    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async () => {
        const response = await POST<Post>('', data);

        return response;
      },
    });
  },
  useDeletePost: (postId: string | number) => {
    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async () => {
        const response = await DELETE(`/posts/:${postId}`);

        return response;
      },
    });
  },
  useEditPost: (postId: string | number, data: Partial<Post>) => {
    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async () => {
        const response = await PATCH<Post>(`/posts/${postId}`, data);

        return response;
      },
    });
  },
};

export default postAPI;
