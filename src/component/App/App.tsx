import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { CatImages } from '@/domains/CatImages';

const queryClient = new QueryClient();

export const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatImages />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
