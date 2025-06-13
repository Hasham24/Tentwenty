import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import {IconProps} from 'react-native-vector-icons/Icon';
import {ICON_TYPES} from '~constants';
import {colors} from '~theme';
interface IVectorIcon extends Partial<IconProps> {
  name: string;
  iconType?: ICON_TYPES;
}
export const VectorIcon: React.FC<IVectorIcon> = props => {
  const {
    name,
    iconType = ICON_TYPES.AntDesign,
    color = colors.black,
    ...restProps
  } = props;
  switch (iconType) {
    case ICON_TYPES.AntDesign:
      return <AntDesign name={name} color={color} {...restProps} />;
    case ICON_TYPES.Ionicons:
      return <IoniconsIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.FontAwesome:
      return <FontAwesome name={name} color={color} {...restProps} />;
    case ICON_TYPES.FontAwesome5:
      return <FontAwesome5 name={name} color={color} {...restProps} />;
    case ICON_TYPES.SimpleLineIcons:
      return <SimpleLineIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.MaterialIcons:
      return <MaterialIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.MaterialCommunityIcons:
      return (
        <MaterialCommunityIcons name={name} color={color} {...restProps} />
      );
    case ICON_TYPES.Entypo:
      return <Entypo name={name} color={color} {...restProps} />;
    case ICON_TYPES.Foundation:
      return <Foundation name={name} color={color} {...restProps} />;
    case ICON_TYPES.EvilIcons:
      return <EvilIcons name={name} color={color} {...restProps} />;
    case ICON_TYPES.Feather:
      return <Feather name={name} color={color} {...restProps} />;
    case ICON_TYPES.Octicons:
      return <Octicons name={name} color={color} {...restProps} />;
    case ICON_TYPES.Fontisto:
      return <Fontisto name={name} color={color} {...restProps} />;
    default:
      return <AntDesign name={name} color={color} {...restProps} />;
  }
};
