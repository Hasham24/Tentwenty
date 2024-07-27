import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '~theme';
const useStyle = () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      // Paddings to handle safe area
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
  });
};
export default useStyle;
