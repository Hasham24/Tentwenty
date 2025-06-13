import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, width} from '~theme';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      marginTop: 10,
      paddingHorizontal: 16,
    },
    row: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    seatInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      flex: 0.5,
    },
    seat: {
      width: 20,
      height: 16,
      borderRadius: 2,
    },
    seatBottom: {
      width: 10,
      height: 2,
      marginTop: 1,
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
    seatText: {
      fontSize: fontSize.small,
      color: colors.gray,
      fontFamily: fontFamily.PoppinsMedium,
    },
    selectedRow: {
      maxWidth: width(30),
      marginTop: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: colors.silverChalice10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectedRowText: {
      fontSize: fontSize.xStandard,
      color: colors.cloudBurst,
      fontFamily: fontFamily.PoppinsMedium,
    },
    rowCount: {
      fontSize: fontSize.tiny,
      fontFamily: fontFamily.PoppinsRegular,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
      flex: 1,
      gap: 20,
    },
    totalContainer: {
      height: 70,
      flex: 1,
      borderRadius: 8,
      gap: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.silverChalice10,
    },
    totalPrice: {
      fontSize: fontSize.tiny,
      color: colors.cloudBurst,
      fontFamily: fontFamily.PoppinsRegular,
    },
    amountText: {
      fontSize: fontSize.standard,
      color: colors.cloudBurst,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
    button: {
      width: width(55),
      height: 70,
      paddingVertical: 0,
      marginTop: 0,
    },
  });
};
export default useStyle;
