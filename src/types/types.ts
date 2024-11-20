// Types for TMDb API responses
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface MovieResponse {
    results: Movie[];
    total_pages: number;
    page: number;
  }