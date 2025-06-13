import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '~theme';

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
      borderColor: colors.gallery,
      borderWidth: 0.5,
      borderRadius: 20,
      width: 36,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
    },
    zoomText: {
      fontSize: fontSize.regular,
      fontFamily: fontFamily.PoppinsMedium,
    },
  });
};
export default useStyle;
