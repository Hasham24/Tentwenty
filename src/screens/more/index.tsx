import React from 'react';
import {View, Text} from 'react-native';
import useStyle from './styles';

const More = () => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More Screen</Text>
    </View>
  );
};

export default More;
