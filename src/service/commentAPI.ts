import { useQuery } from '@tanstack/react-query';
import { Comment } from '~/types';
import { GET } from '~/api/request';

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
      queryKey: ['oneComment'],
      queryFn: async () => {
        const response = await GET<Comment>(`/comments/${commentId}`);

        return response;
      },
    });
  },
};

export default commentAPI;
