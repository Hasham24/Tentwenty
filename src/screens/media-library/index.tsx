import React from 'react';
import {View, Text} from 'react-native';
import useStyle from './styles';

const MediaLibrary = () => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Text>Media Library Screen</Text>
    </View>
  );
};

export default MediaLibrary;
