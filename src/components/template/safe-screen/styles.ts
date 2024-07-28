import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '~theme';
const useStyle = () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingTop: insets.top,
    },
  });
};
export default useStyle;
