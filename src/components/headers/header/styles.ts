import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
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
      marginHorizontal: 10,
      textAlign: 'center',
    },
    descriptionText: {
      color: colors.lightBlue,
      fontSize: fontSize.small,
      fontFamily: fontFamily.PoppinsSemiBold,
      marginHorizontal: 10,
      textAlign: 'center',
    },
    empty: {
      width: 30,
    },
  });
};
export default useStyle;
