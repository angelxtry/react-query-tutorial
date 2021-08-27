export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
  links: {
    html: string;
  };
}

export interface PagiInfo {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
