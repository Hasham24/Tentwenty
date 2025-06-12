import React, {useCallback} from 'react';
import {isEmpty} from 'lodash';
import {FlatList, View, ListRenderItem} from 'react-native';
import {useTranslation} from 'react-i18next';
import {MovieHeader, SafeScreen, MovieItem, ScreenLoader} from '~components';
import useMovie from './useMovie';
import useStyle from './styles';

const Movies = () => {
  const styles = useStyle();
  const {
    movies,
    isLoading,
    refreshing,
    navigationHandler,
    onEndReachedHandler,
    onRefreshHandler,
  } = useMovie();
  const {t} = useTranslation('movie');

  const ShowMovies: ListRenderItem<IMovie> = useCallback(
    ({item}) => {
      return (
        <MovieItem item={item} onPress={() => navigationHandler(item?.id)} />
      );
    },
    [navigationHandler],
  );
  if (isLoading && isEmpty(movies)) {
    return <ScreenLoader />;
  }
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
          onEndReached={onEndReachedHandler}
          onRefresh={onRefreshHandler}
          refreshing={refreshing}
        />
      </View>
    </SafeScreen>
  );
};

export default Movies;
