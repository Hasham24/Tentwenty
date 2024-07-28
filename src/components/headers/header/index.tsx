import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '~types/routes';
import {VectorIcon} from '~components';
import {colors, iconSize} from '~theme';
import {ICON_TYPES} from '~constants';
import useStyle from './styles';

interface IHeader {
  title: string;
  iconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<IHeader> = props => {
  const styles = useStyle();
  const {
    title = '',
    titleContainerStyle,
    containerStyle,
    iconColor = colors.black,
    textStyle,
  } = props;
  const {goBack} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.iconButton}
        onPress={goBack}>
        <VectorIcon
          iconType={ICON_TYPES.Ionicons}
          name="chevron-back-outline"
          size={iconSize.regular}
          color={iconColor}
        />
      </TouchableOpacity>
      <View style={[styles.textContainer, titleContainerStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </View>
  );
};
export default Header;
