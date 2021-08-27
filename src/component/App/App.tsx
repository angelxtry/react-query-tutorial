import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { CatImages } from '@/domains/CatImages';

const queryClient = new QueryClient();

export const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-white text-xl'>
        Unsplash Image Viewer (React Query Tutorial)
      </h1>
      <CatImages />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
