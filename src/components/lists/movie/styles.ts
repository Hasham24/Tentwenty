import {StyleSheet} from 'react-native';
import {colors, height, width, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    image: {
      width: '100%',
      borderRadius: 10,
      marginTop: height(2),
      height: height(20),
    },
    activityIndicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{translateX: -25}, {translateY: -25}],
    },
    textContainer: {
      bottom: height(2),
      marginHorizontal: width(2.5),
      padding: 2,
      borderRadius: 5,
      backgroundColor: colors.lightGray10,
      position: 'absolute',
    },
    title: {
      color: colors.white,
      fontSize: fontSize.regular,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
  });
};
export default useStyle;
