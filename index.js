import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListAction from './screen/ListAction';
import DetailAction from './screen/DetailAction';
import History from './screen/history';
import ScreenTest from './Example/ScreenTest';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name="ScreenTest" component={ScreenTest} />
      <Stack.Screen name="ListAction" component={ListAction} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="DetailAction" component={DetailAction} />
    </Stack.Navigator>
  );
}
