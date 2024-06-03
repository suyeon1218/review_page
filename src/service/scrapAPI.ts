import { useQuery } from '@tanstack/react-query';
import { Like } from '~/types';
import { GET } from '~/api/request';

const scrapAPI = {
  useGETScrapByUserId: (userId: string) => {
    return useQuery({
      queryKey: ['like'],
      queryFn: async () => {
        const response = await GET<Like[]>(`/likes/?userId=${userId}`);

        return response;
      },
    });
  },
};

export default scrapAPI;
