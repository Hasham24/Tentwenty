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
    seat: {
      width: 16,
      height: 16,
      marginHorizontal: 3,
      borderRadius: 4,
    },
    seatBottom: {
      width: 4,
      height: 2,
      marginTop: 1,
      borderRadius: 0.5,
      alignSelf: 'center',
    },
    selected: {
      backgroundColor: colors.yellow, // yellow
    },
    vip: {
      backgroundColor: colors.purple, // deep purple
    },
    regular: {
      backgroundColor: colors.lightBlue, // light blue
    },
    notAvailable: {
      backgroundColor: colors.silverChalice50, // light gray
    },
  });
};
export default useStyle;
