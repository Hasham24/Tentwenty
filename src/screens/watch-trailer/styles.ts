import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: width(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      fontWeight: '500',
    },
  });
};
export default useStyle;
