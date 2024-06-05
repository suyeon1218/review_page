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
    const toast = useToastMessage();

    return useMutation({
      mutationKey: ['createPost'],
      mutationFn: async ({ post }: { post: Omit<Post, 'id'> }) => {
        const response = await POST<Post>('/posts', post);

        return response;
      },
      onSuccess: (data) => {
        if (data) {
          navigate(`/posts/${data.id}`);
          toast({
            description: '포스트를 발행했어요!',
            status: 'success',
          });
        }
      },
      onError: () => {
        toast({
          description: '포스트를 발행하지 못했어요.',
          status: 'error',
        });
      },
    });
  },
  useDeletePost: () => {
    const navigate = useNavigate();
    const toast = useToastMessage();

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
        toast({
          description: '포스트를 삭제했어요!',
          status: 'success',
        });
        navigate('/');
      },
      onError: () => {
        toast({ description: '포스트를 삭제하지 못했어요.', status: 'error' });
      },
    });
  },
  useEditPost: () => {
    const navigate = useNavigate();
    const toast = useToastMessage();

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
        toast({ description: '포스트를 발행했어요!', status: 'success' });
      },
      onError: () => {
        toast({ description: '포스트를 발행하지 못했어요.', status: 'error' });
      },
    });
  },
};

export default postAPI;
