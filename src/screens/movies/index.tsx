import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {MovieHeader, SafeScreen, MovieItem} from '~components';
import useMovie from './useMovie';
import useStyle from './styles';

const Movies = () => {
  const {results} = useMovie();
  const styles = useStyle();
  const ShowMovies = useCallback(({item}: {item: IMovie}) => {
    return <MovieItem item={item} />;
  }, []);
  return (
    <SafeScreen>
      <MovieHeader title="Watch" />
      <View style={styles.container}>
        <FlatList
          data={results}
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
