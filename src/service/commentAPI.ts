import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { queryClient, DELETE, GET, PATCH, POST } from '~/api';
import { END_POINT } from '~/constants';
import { useToastMessage } from '~/hooks';
import { Comment } from '~/types';

const commentAPI = {
  useGetCommentByPost: (postId: string) => {
    return useSuspenseQuery({
      queryKey: ['allComment'],
      queryFn: async () => {
        const response = await GET<Comment[]>(
          `${END_POINT.COMMNETS}?postId=${postId}`
        );

        return response;
      },
    });
  },
  useGetCommentById: (commentId: string) => {
    return useSuspenseQuery({
      queryKey: [`comment_${commentId}`],
      queryFn: async () => {
        const response = await GET<Comment>(
          `${END_POINT.COMMNETS}/${commentId}`
        );

        return response;
      },
    });
  },
  useCreateComment: () => {
    const toast = useToastMessage();
    return useMutation({
      mutationKey: ['createComment'],
      mutationFn: async ({ comment }: { comment: Omit<Comment, 'id'> }) => {
        const response = await POST(`${END_POINT.COMMNETS}`, comment);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['allComment'] });
      },
      onError: () => {
        toast({ description: '댓글을 작성하지 못했어요!', status: 'error' });
      },
    });
  },
  useDeleteComment: () => {
    const toast = useToastMessage();
    return useMutation({
      mutationKey: ['deleteComment'],
      mutationFn: async ({ commentId }: { commentId: string }) => {
        const response = await DELETE(`${END_POINT.COMMNETS}/${commentId}`);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['allComment'],
        });
      },
      onError: () => {
        toast({ description: '댓글을 삭제하지 못했어요!', status: 'error' });
      },
    });
  },
  useEditComment: () => {
    const toast = useToastMessage();
    return useMutation({
      mutationKey: ['editComment'],
      mutationFn: async ({
        commentId,
        content,
      }: {
        commentId: string;
        content: string;
      }) => {
        const response = await PATCH<Comment>(
          `${END_POINT.COMMNETS}/${commentId}`,
          {
            content,
          }
        );

        return response;
      },
      onSuccess: (_, { commentId }) => {
        queryClient.invalidateQueries({ queryKey: [`comment_${commentId}`] });
      },
      onError: () => {
        toast({ description: '댓글을 수정하지 못했어요!', status: 'error' });
      },
    });
  },
};

export default commentAPI;
