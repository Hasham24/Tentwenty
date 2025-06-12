import {StyleSheet} from 'react-native';
import {colors, height} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.whisper,
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingBottom: height(10),
    },
  });
};
export default useStyle;
