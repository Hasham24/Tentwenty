import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import useStyle from './styles';

interface IButton extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  hasIcon?: boolean;
  icon?: JSX.Element;
}

const Button = (props: IButton) => {
  const {
    text,
    disabled = false,
    textStyle,
    style,
    hasIcon = false,
    icon,
    onPress,
  } = props;
  const styles = useStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabled && styles.disabled, style]}
      disabled={disabled}
      activeOpacity={0.95}>
      {hasIcon && <View style={styles.iconView}>{icon}</View>}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
