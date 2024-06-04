import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient, DELETE, GET, POST } from '~/api';
import { Like } from '~/types';

const likeAPI = {
  useGetLikeByUserId: (userId: string) => {
    return useQuery({
      queryKey: ['like'],
      queryFn: async () => {
        const response = await GET<Like[]>(`/like/?userId=${userId}`);

        return response;
      },
    });
  },
  useCreateLike: () => {
    return useMutation({
      mutationKey: [`createLike`],
      mutationFn: async ({ like }: { like: Omit<Like, 'id'> }) => {
        const response = await POST(`/like`, like);
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
        const response = await DELETE(`/like/${likeId}`);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['like'] });
      },
    });
  },
};

export default likeAPI;
