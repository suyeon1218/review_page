import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '~/api';
import { Scrap } from '~/types';
import { DELETE, GET, POST } from '~/api/request';

const scrapAPI = {
  useGetScrapByUserId: (userId: string) => {
    return useQuery({
      queryKey: ['scrap'],
      queryFn: async () => {
        const response = await GET<Scrap[]>(`/scrap/?userId=${userId}`);

        return response;
      },
    });
  },
  useCreateScrap: () => {
    return useMutation({
      mutationKey: [`createScrap`],
      mutationFn: async ({ scrap }: { scrap: Omit<Scrap, 'id'> }) => {
        const response = await POST(`/scrap`, scrap);
        console.log();
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['scrap'] });
      },
    });
  },
  useDeleteScrapById: () => {
    return useMutation({
      mutationKey: [`deleteScrap`],
      mutationFn: async ({ scrapId }: { scrapId: string }) => {
        const response = await DELETE(`/scrap/${scrapId}`);

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['scrap'] });
      },
    });
  },
};

export default scrapAPI;
