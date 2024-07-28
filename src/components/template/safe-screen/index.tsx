import React, {PropsWithChildren} from 'react';
import {StatusBar, View} from 'react-native';
import {colors} from '~theme';
import useStyle from './styles';

function SafeScreen({children}: PropsWithChildren) {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.white}
        translucent
      />
      {children}
    </View>
  );
}

export default SafeScreen;
