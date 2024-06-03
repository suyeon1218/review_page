import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '~/api';
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
  useGetPostById: (postId: string) => {
    return useQuery({
      queryKey: [`post_${postId}`],
      queryFn: async () => {
        const response = await GET<Post>(`/posts/${postId}`);

        return response;
      },
    });
  },
  useCreatePost: ({ post }: { post: Post }) => {
    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async () => {
        const response = await POST<Post>('', post);

        return response;
      },
    });
  },
  useDeletePost: () => {
    const navigate = useNavigate();

    return useMutation({
      mutationKey: ['deletePost'],
      mutationFn: async ({ postId }: { postId: string }) => {
        const response = await DELETE(`/posts/${postId}`);

        return response;
      },
      onSuccess: (_, { postId }) => {
        queryClient.invalidateQueries({
          queryKey: ['allPost', `post_${postId}`],
        });
        alert('리뷰를 삭제했어요!');
        navigate('/');
      },
    });
  },
  useEditPost: () => {
    return useMutation({
      mutationKey: ['editPost'],
      mutationFn: async ({
        postId,
        post,
      }: {
        postId: string;
        post: Partial<Post>;
      }) => {
        const response = await PATCH<Post>(`/posts/${postId}`, post);

        return response;
      },
    });
  },
};

export default postAPI;
