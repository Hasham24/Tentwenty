import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.lightBlue,
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: height(1),
    },
    disabled: {
      opacity: 0.5,
    },
    iconButton: {
      padding: 10,
    },
    iconView: {
      marginRight: width(2.5),
    },
    text: {
      color: colors.white,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      fontWeight: '600',
    },
  });
};
export default useStyle;
