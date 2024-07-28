import {StyleSheet} from 'react-native';
import {colors, height, width, fontFamily, fontSize} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginTop: height(1),
    },
    item: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: width(2),
      borderRadius: 20,
    },
    text: {
      color: colors.white,
      fontSize: fontSize.small,
      fontFamily: fontFamily.PoppinsSemiBold,
      fontWeight: '600',
    },
  });
};
export default useStyle;
