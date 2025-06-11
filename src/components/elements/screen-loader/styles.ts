import {StyleSheet} from 'react-native';
import {height} from '~theme';

const useStyle = () => {
  return StyleSheet.create({
    indicator: {
      marginTop: height(10),
    },
  });
};
export default useStyle;
