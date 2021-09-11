import { ReactNode } from 'react';

import { Sidebar } from '@/component/Layout/Sidebar';

interface Props {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div className='h-full'>
      <Sidebar />
      <div className='h-full flex flex-col'>
        <section className='ml-64 px-4'>{children}</section>
      </div>
    </div>
  );
};
