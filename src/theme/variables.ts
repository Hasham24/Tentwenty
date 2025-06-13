import {Dimensions} from 'react-native';

export const fontSize = {
  xTiny: 8,
  tiny: 10,
  small: 12,
  xStandard: 14,
  standard: 16,
  regular: 18,
  medium: 22,
  large: 30,
  huge: 40,
};
export const iconSize = {
  tiny: 15,
  small: 20,
  standard: 25,
  regular: 30,
  medium: 35,
  large: 40,
  huge: 45,
};
export const colors = {
  darkGray: '#2E2739',
  mildGray: '#827D88',
  lightGray: '#DBDBDF',
  athensGray: '#f2f1f6',
  gallery: '#EFEFEF',
  lightGray10: 'rgba(219, 219, 223, 0.3)',
  lightGreen: '#15D2BC',
  pink: '#E26CA5',
  purple: '#564CA3',
  yellow: '#CD9D0F',
  whisper: '#F6F6FA',
  white: '#FFF',
  black: '#000',
  transparent: 'transparent',
  lightBlue: '#61C3F2',
  cloudBurst: '#202C43',
  cloudBurst10: 'rgba(32, 44, 67, 0.1)',
  cloudBurst30: 'rgba(32, 44, 67, 0.3)',
  gray: '#8F8F8F',
  silverChalice: '#A6A6A6',
  silverChalice50: 'rgba(166, 166, 166, 0.5)',
  silverChalice10: 'rgba(166, 166, 166, 0.1)',
  blackcurrant: '#2F2738',
};
export const fontFamily = {
  PoppinsBlack: 'Poppins-Black',
  PoppinsBlackItalic: 'Poppins-BlackItalic',
  PoppinsBold: 'Poppins-Bold',
  PoppinsBoldItalic: 'Poppins-BoldItalic',
  PoppinsExtraBold: 'Poppins-ExtraBold',
  PoppinsExtraBoldItalic: 'Poppins-ExtraBoldItalic',
  PoppinsExtraLight: 'Poppins-ExtraLight',
  PoppinsExtraLightItalic: 'Poppins-ExtraLightItalic',
  PoppinsItalic: 'Poppins-Italic',
  PoppinsLight: 'Poppins-Light',
  PoppinsLightItalic: 'Poppins-LightItalic',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsMediumItalic: 'Poppins-MediumItalic',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsSemiBoldItalic: 'Poppins-SemiBoldItalic',
  PoppinsThin: 'Poppins-Thin',
  PoppinsThinItalic: 'Poppins-ThinItalic',
};
export const width = (number: number): number => {
  let fullWidth = Dimensions.get('window').width;
  if (number >= 100) {
    return fullWidth;
  } else if (number <= 0) {
    return 0;
  } else {
    return fullWidth * (number / 100);
  }
};
export const height = (number: number) => {
  let fullHeight = Dimensions.get('window').height;
  if (number >= 100) {
    return fullHeight;
  } else if (number <= 0) {
    return 0;
  } else {
    return fullHeight * (number / 100);
  }
};
