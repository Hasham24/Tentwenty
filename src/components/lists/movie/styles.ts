import {StyleSheet} from 'react-native';
import {colors, height, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    image: {
      width: '100%',
      borderRadius: 10,
      marginTop: height(2),
      height: 180,
    },
    activityIndicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{translateX: -25}, {translateY: -25}],
    },
    title: {
      position: 'absolute',
      bottom: 16,
      marginHorizontal: 16,
      color: colors.white,
      fontSize: fontSize.regular,
      fontFamily: fontFamily.PoppinsSemiBold,
      textShadowColor: colors.black,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
  });
};
export default useStyle;
