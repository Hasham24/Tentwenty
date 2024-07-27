import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '~store';
import ApplicationNavigator from './routes';
import './translations';

function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}

export default App;
