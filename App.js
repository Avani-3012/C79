import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import ItemRequestScreen from './Screens/ItemRequestScreen'

import MainScreen from './Screens/MainScreen'
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
   <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  MainScreen:{screen: MainScreen},
  BottomTab:{screen: AppTabNavigator},
  
})

const AppContainer =  createAppContainer(switchNavigator);