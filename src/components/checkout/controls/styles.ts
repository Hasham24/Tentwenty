import {StyleSheet} from 'react-native';
import {colors} from '~theme';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    controls: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingHorizontal: 10,
      marginTop: 10,
      gap: 10,
    },
    bar: {
      width: '90%',
      alignSelf: 'center',
      height: 6,
      marginVertical: 10,
      borderRadius: 4,
      opacity: 0.3,
      backgroundColor: colors.cloudBurst,
    },
    zoomButton: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 20,
      width: 36,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
    },
    zoomText: {
      fontSize: 24,
      fontWeight: '600',
    },
  });
};
export default useStyle;
