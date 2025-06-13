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
interface IGetMoviesResponse {
  dates: IDate;
  results: IMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}
interface IGenre {
  id: number;
  name: string;
}
interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface IProductionCompany {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}
interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
type SeatType = 'vip' | 'regular' | 'not-available' | 'selected';
interface ISeats {
  id: string;
  type: SeatType;
}
interface ICinema {
  id: string;
  showTime: string;
  hall: string;
  currency: string;
  price: number;
  bonus: number;
  seats: ISeats[][];
}
