import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Movies, Dashboard, MediaLibrary, More} from '~screens';
import {ICON_TYPES, ScreenNames} from '~constants';
import {VectorIcon} from '~components';
import useStyle from './styles';
import {colors} from '~theme';

const Tab = createBottomTabNavigator();

const TabLabel = ({focused, label}: {focused: boolean; label: string}) => {
  const styles = useStyle();
  return (
    <Text style={[styles.text, focused && styles.focusedText]}>{label}</Text>
  );
};

const DashboardTabLabel = (props: {focused: boolean}) => (
  <TabLabel {...props} label="Dashboard" />
);
const MoviesTabLabel = (props: {focused: boolean}) => (
  <TabLabel {...props} label="Movies" />
);
const MediaLibraryTabLabel = (props: {focused: boolean}) => (
  <TabLabel {...props} label="Media Library" />
);
const MoreTabLabel = (props: {focused: boolean}) => (
  <TabLabel {...props} label="More" />
);

const DashboardTabIcon = ({focused}: {focused: boolean}) => (
  <VectorIcon
    iconType={ICON_TYPES.Entypo}
    name="grid"
    size={16}
    color={focused ? colors.white : colors.mildGray}
  />
);
const MoviesTabIcon = ({focused}: {focused: boolean}) => (
  <VectorIcon
    iconType={ICON_TYPES.MaterialCommunityIcons}
    name="play-box"
    size={16}
    color={focused ? colors.white : colors.mildGray}
  />
);
const MediaLibraryTabIcon = ({focused}: {focused: boolean}) => (
  <VectorIcon
    iconType={ICON_TYPES.MaterialIcons}
    name="photo-library"
    size={16}
    color={focused ? colors.white : colors.mildGray}
  />
);
const MoreTabIcon = ({focused}: {focused: boolean}) => (
  <VectorIcon
    iconType={ICON_TYPES.Foundation}
    name="list-bullet"
    size={16}
    color={focused ? colors.white : colors.mildGray}
  />
);

const BottomTab = () => {
  const styles = useStyle();
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Movies}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name={ScreenNames.Dashboard}
        component={Dashboard}
        options={{
          tabBarLabel: DashboardTabLabel,
          tabBarIcon: DashboardTabIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Movies}
        component={Movies}
        options={{
          tabBarLabel: MoviesTabLabel,
          tabBarIcon: MoviesTabIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.MediaLibrary}
        component={MediaLibrary}
        options={{
          tabBarLabel: MediaLibraryTabLabel,
          tabBarIcon: MediaLibraryTabIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.More}
        component={More}
        options={{
          tabBarLabel: MoreTabLabel,
          tabBarIcon: MoreTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
