import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '~theme';

const useStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '500',
    },
  });

export default useStyle;
