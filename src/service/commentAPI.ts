import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '~/api';
import { Comment } from '~/types';
import { GET, POST } from '~/api/request';

const commentAPI = {
  useGetCommentByPost: (postId: string) => {
    return useQuery({
      queryKey: ['allComent'],
      queryFn: async () => {
        const response = await GET<Comment[]>(`/comments?postId=${postId}`);

        return response;
      },
    });
  },
  useGetCommentById: (commentId: string) => {
    return useQuery({
      queryKey: [`comment${commentId}`],
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
};

export default commentAPI;
