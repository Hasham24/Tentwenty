import {StyleSheet} from 'react-native';
import {colors} from '~theme';

const useStyle = () => {
  return StyleSheet.create({
    line: {
      width: '100%',
      backgroundColor: colors.lightGray,
      borderBottomWidth: 0.5,
    },
  });
};
export default useStyle;
