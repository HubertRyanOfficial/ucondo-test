import 'react-native-gesture-handler';
import React from 'react';

// components

import Loading from './src/components/Loading';

// modules

import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// * utils

import Routes from './src/routes';
import {colors} from './src/utils/global';

import configureStore from './src/config/store';
const {persistor, store} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
