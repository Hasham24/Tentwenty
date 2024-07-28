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
    textContainer: {
      flex: 1,
    },
    text: {
      color: colors.white,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
    descriptionText: {
      color: colors.lightBlue,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
    empty: {
      width: 30,
    },
  });
};
export default useStyle;
