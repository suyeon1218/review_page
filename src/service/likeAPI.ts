import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, DELETE, GET, POST } from '~/api';
import { END_POINT } from '~/constants';
import { Like } from '~/types';

const likeAPI = {
  useGetLikeByUserId: (userId: string) => {
    return useQuery({
      queryKey: ['like'],
      queryFn: async () => {
        const response = await GET<Like[]>(
          `${END_POINT.LIKE}/?userId=${userId}`
        );

        return response;
      },
    });
  },
  useCreateLike: () => {
    return useMutation({
      mutationKey: [`createLike`],
      mutationFn: async ({ like }: { like: Omit<Like, 'id'> }) => {
        const response = await POST(`${END_POINT.LIKE}`, like);
        console.log();
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['like'] });
      },
    });
  },
  useDeleteLikeById: () => {
    return useMutation({
      mutationKey: [`deleteLike`],
      mutationFn: async ({ likeId }: { likeId: string }) => {
        const response = await DELETE(`${END_POINT.LIKE}/${likeId}`);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['like'] });
      },
    });
  },
};

export default likeAPI;
