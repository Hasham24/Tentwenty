import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  movies: undefined;
  watchTrailer: undefined;
  movieDetails: {
    id: string;
  };
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
