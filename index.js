import IconComponent from './component/Icon';
import IconButtonComponent from './component/IconButton';
import ValueButtonComponent from './component/ValueButton';
import ActionButtonComponent from './component/ActionButton';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListAction from './screen/ListAction';
import DetailAction from './screen/DetailAction';
import History from './screen/history';
import ScreenTest from './screen/ScreenTest';

const Stack = createStackNavigator();


export const Icon = IconComponent;
export const IconButton = IconButtonComponent;
export const ValueButton =  ValueButtonComponent;
export const ActionButton = ActionButtonComponent;

export default function App() {
  return (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="History" component={History} />
      {/* <Stack.Screen name="ScreenTest" component={ScreenTest} /> */}
      <Stack.Screen name="ListAction" component={ListAction} />
      <Stack.Screen name="DetailAction" component={DetailAction} />
    </Stack.Navigator>
  );
}
