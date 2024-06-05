import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, DELETE, GET, PATCH, POST } from '~/api';
import { Comment } from '~/types';

const commentAPI = {
  useGetCommentByPost: (postId: string) => {
    return useQuery({
      queryKey: ['allComment'],
      queryFn: async () => {
        const response = await GET<Comment[]>(`/comments?postId=${postId}`);

        return response;
      },
    });
  },
  useGetCommentById: (commentId: string) => {
    return useQuery({
      queryKey: [`comment_${commentId}`],
      queryFn: async () => {
        const response = await GET<Comment>(`/comments/${commentId}`);

        return response;
      },
    });
  },
  useCreateComment: () => {
    return useMutation({
      mutationKey: ['createComment'],
      mutationFn: async ({ comment }: { comment: Omit<Comment, 'id'> }) => {
        const response = await POST('/comments', comment);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['allComment'] });
      },
    });
  },
  useDeleteComment: () => {
    return useMutation({
      mutationKey: ['deleteComment'],
      mutationFn: async ({ commentId }: { commentId: string }) => {
        const response = await DELETE(`/comments/${commentId}`);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['allComment'],
        });
      },
    });
  },
  useEditComment: () => {
    return useMutation({
      mutationKey: ['editComment'],
      mutationFn: async ({
        commentId,
        content,
      }: {
        commentId: string;
        content: string;
      }) => {
        const response = await PATCH<Comment>(`/comments/${commentId}`, {
          content,
        });

        return response;
      },
      onSuccess: (_, { commentId }) => {
        queryClient.invalidateQueries({ queryKey: [`comment_${commentId}`] });
      },
    });
  },
};

export default commentAPI;
