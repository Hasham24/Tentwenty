import React from 'react';
import {View, ViewProps} from 'react-native';
import useStyles from './styles';

const Separator = (props: ViewProps) => {
  const {style} = props;
  const styles = useStyles();
  return <View style={[styles.line, style]} />;
};

export default React.memo(Separator);
