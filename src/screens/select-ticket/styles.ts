import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: width(5),
      backgroundColor: colors.lightGray,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '500',
    },
    button: {
      marginTop: 0,
      marginBottom: height(5),
    },
  });
};
export default useStyle;
