import { useQuery } from 'react-query';

import { getCatImages } from '@/domains/CatImages/api';
import { PagiInfo } from '@/domains/CatImages/types';
import { HTTPError } from 'ky';

export const CatImages = () => {
  const { data, error, isLoading } = useQuery<PagiInfo, HTTPError>(
    'catImages',
    getCatImages
  );

  if (isLoading) {
    return <div className='text-white text-xl'>Loading...</div>;
  }

  if (error) {
    return <div className='text-white text-xl'>{error.message}</div>;
  }

  return (
    <div className='container'>
      {data &&
        data.results.map((image, index) => (
          <figure key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
            <figcaption className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
              <a href={image.links.html} target='_blank' rel='noreferrer'>
                {index + 1}
              </a>
            </figcaption>
          </figure>
        ))}
    </div>
  );
};
