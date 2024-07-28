import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {MovieHeader, SafeScreen, MovieItem} from '~components';
import useMovie from './useMovie';
import useStyle from './styles';

const Movies = () => {
  const {movies, navigationHandler} = useMovie();
  const {t} = useTranslation('movie');
  const styles = useStyle();
  const ShowMovies = useCallback(
    ({item}: {item: IMovie}) => {
      return (
        <MovieItem item={item} onPress={() => navigationHandler(item?.id)} />
      );
    },
    [navigationHandler],
  );
  return (
    <SafeScreen>
      <MovieHeader title={t('watch')} />
      <View style={styles.container}>
        <FlatList
          data={movies}
          showsVerticalScrollIndicator={false}
          renderItem={ShowMovies}
          keyExtractor={(_, index) => String(index)}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </SafeScreen>
  );
};

export default Movies;
