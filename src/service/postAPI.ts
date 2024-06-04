import { useToast } from '@chakra-ui/react';
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
  useCreatePost: () => {
    const navigate = useNavigate();
    const toast = useToast();

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
            description: '포스트를 정상적으로 발행했어요!',
            status: 'success',
            duration: 5000,
            position: 'top',
            isClosable: true,
          });
        }
      },
    });
  },
  useDeletePost: () => {
    const navigate = useNavigate();
    const toast = useToast();

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
          description: '포스트를 정상적으로 삭제했어요!',
          status: 'success',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
        navigate('/');
      },
    });
  },
  useEditPost: () => {
    const navigate = useNavigate();
    const toast = useToast();

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
        toast({
          description: '포스트를 정상적으로 발행했어요!',
          status: 'success',
          duration: 5000,
          position: 'top',
          isClosable: true,
        });
      },
    });
  },
};

export default postAPI;
