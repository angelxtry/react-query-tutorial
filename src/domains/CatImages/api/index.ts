import ky from 'ky';

import { PagiInfo } from '@/domains/CatImages/types';

const { UNSPLASH_CLIENT_KEY } = process.env;

export const getCatImages = async (): Promise<PagiInfo> => {
  const url = 'https://api.unsplash.com/search/photos';
  const json = await ky(url, {
    searchParams: {
      client_id: UNSPLASH_CLIENT_KEY || '',
      query: 'cat',
      page: 1,
      per_page: 30,
    },
  }).json<PagiInfo>();
  return json;
};
