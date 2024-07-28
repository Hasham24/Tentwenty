import {StyleSheet} from 'react-native';
import {colors, height, width, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      marginTop: height(2),
      width: '100%',
    },
    label: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      marginBottom: height(2.5),
      marginHorizontal: width(5),
    },
    dateItem: {
      paddingVertical: 6,
      paddingHorizontal: 16,
      marginRight: width(2),
      borderRadius: 8,
      backgroundColor: colors.silverChalice10,
    },
    selectedDateItem: {
      backgroundColor: colors.lightBlue,
    },
    dateText: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
    selectedDateText: {
      color: colors.white,
    },
    contentContainer: {
      paddingHorizontal: width(5),
    },
  });
};
export default useStyle;
