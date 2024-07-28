import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Movies, MovieDetails} from '~screens';
import {ScreenNames} from '~constants';
import {RootStackParamList} from '~types/routes';

const Stack = createStackNavigator<RootStackParamList>();

const RoutesNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={ScreenNames.Movies} component={Movies} />
          <Stack.Screen
            name={ScreenNames.MovieDetails}
            component={MovieDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RoutesNavigator;
