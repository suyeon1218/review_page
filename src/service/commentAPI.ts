import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '~/api';
import { Comment } from '~/types';
import { DELETE, GET, POST } from '~/api/request';

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
        confirm('댓글을 삭제했어요!');
        queryClient.invalidateQueries({
          queryKey: ['allComment'],
        });
      },
    });
  },
};

export default commentAPI;
