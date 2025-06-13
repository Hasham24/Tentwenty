import {StyleSheet} from 'react-native';
import {colors, height, width, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      marginTop: height(2.5),
      width: '100%',
    },
    showTime: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsMedium,
      fontWeight: '500',
    },
    hall: {
      color: colors.gray,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsMedium,
      fontWeight: '400',
    },
    seatContainer: {
      width: width(85),
      paddingVertical: 20,
      marginRight: width(2.5),
      marginVertical: height(2),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.cloudBurst10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedSeatContainer: {
      borderWidth: 1,
      opacity: 1,
      borderColor: colors.lightBlue,
    },
    seatStyle: {
      height: 8,
      width: 8,
      borderRadius: 2,
    },
    image: {
      width: width(50),
      height: height(20),
    },
    from: {
      color: colors.gray,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsMedium,
      fontWeight: '500',
    },
    amount: {
      color: colors.cloudBurst,
      fontFamily: fontFamily.PoppinsSemiBold,
      fontWeight: '700',
    },
    contentContainer: {
      paddingHorizontal: width(5),
    },
  });
};
export default useStyle;
