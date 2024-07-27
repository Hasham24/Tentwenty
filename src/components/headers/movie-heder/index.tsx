import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {VectorIcon} from '~components';
import useStyle from './styles';
import {iconSize} from '~theme';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = props => {
  const styles = useStyle();
  const {title = ''} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
        <VectorIcon name="search1" size={iconSize.regular} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
