import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Movies,
  MovieDetails,
  WatchTrailer,
  SelectTicket,
  CheckoutTicket,
} from '~screens';
import {ScreenNames} from '~constants';

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
          <Stack.Screen
            name={ScreenNames.WatchTrailer}
            component={WatchTrailer}
          />
          <Stack.Screen
            name={ScreenNames.SelectTicket}
            component={SelectTicket}
          />
          <Stack.Screen
            name={ScreenNames.CheckoutTicket}
            component={CheckoutTicket}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RoutesNavigator;
