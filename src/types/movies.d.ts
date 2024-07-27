interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface IDate {
  maximum: string;
  minimum: string;
}
interface IGetMovieResponse {
  dates: IDate;
  results: IMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}