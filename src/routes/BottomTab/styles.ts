import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    tabBarStyle: {
      height: 75,
      borderRadius: 27,
      backgroundColor: colors.blackcurrant,
    },
    text: {
      fontSize: fontSize.tiny,
      fontFamily: fontFamily.PoppinsLight,
      color: colors.mildGray,
    },
    focusedText: {
      color: colors.white,
    },
  });
};
export default useStyle;
