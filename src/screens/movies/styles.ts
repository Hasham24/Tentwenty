import {StyleSheet} from 'react-native';
import {height, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      paddingHorizontal: width(5),
      paddingBottom: height(10),
    },
  });
};
export default useStyle;
