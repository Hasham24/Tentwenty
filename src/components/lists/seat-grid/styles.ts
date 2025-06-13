import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    lineContainer: {
      alignItems: 'center',
    },
    label: {
      fontSize: fontSize.small,
      color: colors.gray,
      marginBottom: 4,
      fontFamily: fontFamily.PoppinsMedium,
    },
    curvedLineImage: {
      width: width(50),
    },
    container: {
      paddingVertical: 10,
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      marginVertical: 4,
    },
    rowIndex: {
      position: 'absolute',
      left: 10,
      fontSize: fontSize.xTiny,
      color: colors.cloudBurst,
      fontFamily: fontFamily.PoppinsBold,
    },
    seat: {
      width: 10,
      height: 10,
      marginHorizontal: 3,
      borderRadius: 2,
    },
    seatBottom: {
      width: 4,
      height: 2,
      marginTop: 0.5,
      borderRadius: 0.5,
      alignSelf: 'center',
    },
    selected: {
      backgroundColor: colors.yellow,
    },
    vip: {
      backgroundColor: colors.purple,
    },
    regular: {
      backgroundColor: colors.lightBlue,
    },
    notAvailable: {
      backgroundColor: colors.silverChalice50,
    },
  });
};
export default useStyle;
