import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '~store';
import ApplicationNavigator from './routes';
import './translations';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state. Check:checkoutTicket > params.date.$d',
]);
function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}

export default App;
