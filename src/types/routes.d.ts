type StackScreenProps = import('@react-navigation/stack').StackScreenProps;
type RootStackParamList = {
  movies: undefined;
  watchTrailer: undefined;
  movieDetails: {
    id: string;
  };
  selectTicket: {
    movie: IMovieDetails;
  };
};

type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
