import React from 'react';
import {SafeScreen} from '~components';
import {Text} from 'react-native';
import useMovie from './useMovie';
// import useStyle from './styles';

const Movies = () => {
  const {} = useMovie();
  return (
    <SafeScreen>
      <Text>Movies</Text>
    </SafeScreen>
  );
};

export default Movies;
