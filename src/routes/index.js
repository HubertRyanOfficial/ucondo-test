import React from 'react';

// modules

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//

const OwnStack = createStackNavigator();

// * routes

import Home from './Home';
import Create from './Create';
import Edit from './Edit';

// * utils

const screenOptionsDefault = {
  headerShown: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <OwnStack.Navigator screenOptions={screenOptionsDefault}>
        <OwnStack.Screen name="Home" component={Home} />
        <OwnStack.Screen name="Create" component={Create} />
        <OwnStack.Screen name="Edit" component={Edit} />
      </OwnStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
// Desenvolvido por Hubert Ryan
