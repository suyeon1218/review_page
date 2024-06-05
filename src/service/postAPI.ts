import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { queryClient, DELETE, GET, POST, PATCH } from '~/api';
import { useToastMessage } from '~/hooks';
import { Post } from '~/types';

const postAPI = {
  useGetPosts: () => {
    return useSuspenseQuery({
      queryKey: ['allPost'],
      queryFn: async () => {
        const response = await GET<Post[]>('/posts');

        return response;
      },
    });
  },
  useGetPostById: (postId: string) => {
    return useSuspenseQuery({
      queryKey: [`post_${postId}`],
      queryFn: async () => {
        const response = await GET<Post>(`/posts/${postId}`);

        return response;
      },
    });
  },
  useCreatePost: () => {
    const navigate = useNavigate();
    const toast = useToastMessage('포스트를 발행했어요!', 'success');

    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async ({ post }: { post: Omit<Post, 'id'> }) => {
        const response = await POST<Post>('/posts', post);

        return response;
      },
      onSuccess: (data) => {
        if (data) {
          navigate(`/posts/${data.id}`);
          toast();
        }
      },
    });
  },
  useDeletePost: () => {
    const navigate = useNavigate();
    const toast = useToastMessage('포스트를 삭제했어요!', 'success');

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
        toast();
        navigate('/');
      },
    });
  },
  useEditPost: () => {
    const navigate = useNavigate();
    const toast = useToastMessage('포스트를 발행했어요!', 'success');

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
      onSuccess: (_, { postId }) => {
        navigate(`/posts/${postId}`);
        toast();
      },
    });
  },
};

export default postAPI;
