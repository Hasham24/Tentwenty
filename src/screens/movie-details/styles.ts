import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: width(100),
      height: height(50),
    },
    header: {
      position: 'absolute',
      top: height(2.5),
      backgroundColor: colors.transparent,
    },
    buttonContainer: {
      position: 'absolute',
      alignSelf: 'center',
      width: '100%',
      paddingHorizontal: width(10),
      bottom: height(2.5),
    },
    theaters: {
      color: colors.white,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: height(1),
    },
    button: {
      marginTop: height(2),
    },
    infoContainer: {
      paddingHorizontal: width(5),
    },
    heading: {
      marginTop: height(2.5),
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      fontWeight: '500',
    },
    line: {
      marginTop: height(2.5),
    },
    overView: {
      marginTop: height(1.5),
      color: colors.gray,
      fontSize: fontSize.small,
      fontFamily: fontFamily.PoppinsMedium,
      lineHeight: 20,
      fontWeight: '400',
    },
  });
};
export default useStyle;
