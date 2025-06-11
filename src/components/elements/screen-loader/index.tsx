import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeScreen} from '~components';
import {colors} from '~theme';
import useStyle from './styles';

const ScreenLoader = () => {
  const styles = useStyle();
  return (
    <SafeScreen>
      <ActivityIndicator
        size={'large'}
        color={colors.lightBlue}
        style={styles.indicator}
      />
    </SafeScreen>
  );
};
export default React.memo(ScreenLoader);
