import React from 'react';
import {View} from 'react-native';
import Button from '../component/Button';
import {DeviceData1, DeviceData2} from '../Data/device';

export default ({navigation}) => {
  return (
    <View>
      <Button
        style={{fontSize: 16}}
        name={'Device có một hành động'}
        onPress={() => navigation.navigate('History', DeviceData1)}
      />
       <Button
        style={{fontSize: 16}}
        name={'Device có nhiều hành động'}
        onPress={() => navigation.navigate('History', DeviceData2)}
      />
    </View>
  );
};
