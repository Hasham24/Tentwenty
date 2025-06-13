import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, width} from '~theme';
const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    text: {
      color: colors.cloudBurst,
      fontSize: fontSize.standard,
      fontFamily: fontFamily.PoppinsSemiBold,
      textAlign: 'center',
      fontWeight: '500',
    },
    wrapper: {
      alignItems: 'center',
      backgroundColor: colors.whisper,
      paddingBottom: 20,
    },
    scrollContainer: {
      marginBottom: 40,
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

    rowStyle: {
      width: '100%',
      justifyContent: 'center',
    },
    imageStyle: {
      width: width(90),
    },
  });
};
export default useStyle;
