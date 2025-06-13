import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '500',
    },
    scrollViewContent: {
      paddingBottom: 50,
    },
    wrapper: {
      alignItems: 'center',
      backgroundColor: colors.whisper,
      paddingBottom: 20,
    },
    scrollContainer: {
      marginBottom: 40,
    },

    rowStyle: {
      width: '100%',
      justifyContent: 'center',
    },
    imageStyle: {
      width: width(90),
    },
  });
};
export default useStyle;
