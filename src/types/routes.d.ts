type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type Dayjs = import('dayjs').Dayjs;
type RootStackParamList = {
  movies: undefined;
  watchTrailer: undefined;
  movieDetails: {
    id: string;
  };
  selectTicket: {
    movie: IMovieDetails;
  };
  checkoutTicket: {
    movie: IMovieDetails;
    date: Dayjs;
    cinema: ICinema;
  };
  dashboard: undefined;
  mediaLibrary: undefined;
  more: undefined;
  bottomTab: undefined;
};

type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
