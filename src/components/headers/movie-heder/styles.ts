import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      paddingHorizontal: width(5),
      paddingVertical: height(1),
    },
    iconButton: {
      padding: 5,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
    },
    searchContainer: {
      backgroundColor: colors.athensGray,
      borderColor: colors.gallery,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: height(1),
      marginHorizontal: 16,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderRadius: 30,
      height: height(7),
    },
    textInput: {
      flex: 1,
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      paddingHorizontal: width(1),
    },
  });
};
export default useStyle;
