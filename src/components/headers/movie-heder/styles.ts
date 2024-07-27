import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      paddingHorizontal: width(5),
      paddingVertical: height(1),
    },
    iconButton: {
      padding: 10,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
  });
};
export default useStyle;