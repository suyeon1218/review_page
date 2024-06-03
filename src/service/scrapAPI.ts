import { useMutation, useQuery } from '@tanstack/react-query';
import { Scrap } from '~/types';
import { DELETE, GET, POST } from '~/api/request';

const scrapAPI = {
  useGetScrapByUserId: (userId: string) => {
    return useQuery({
      queryKey: [`scrap`],
      queryFn: async () => {
        const response = await GET<Scrap[]>(`/scrap/?userId=${userId}`);

        return response;
      },
    });
  },
  useCreateScrap: () => {
    return useMutation({
      mutationKey: [`deleteScrap`],
      mutationFn: async (data: Omit<Scrap, 'id'>) => {
        const response = await POST(`/scrap`, data);

        return response;
      },
    });
  },
  useDeleteScrapById: () => {
    return useMutation({
      mutationKey: [`deleteScrap`],
      mutationFn: async (scrapId: string) => {
        const response = await DELETE(`/scrap/${scrapId}`);

        return response;
      },
    });
  },
};

export default scrapAPI;
