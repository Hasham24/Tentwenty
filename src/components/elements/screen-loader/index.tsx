import React from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeScreen} from '~components';
import {colors} from '~theme';

const screenLoader = () => {
  return (
    <SafeScreen>
      <ActivityIndicator color={colors.lightBlue} size={'large'} />
    </SafeScreen>
  );
};
export default screenLoader;
