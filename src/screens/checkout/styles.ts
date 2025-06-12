import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.whisper,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '500',
    },
  });
};
export default useStyle;
