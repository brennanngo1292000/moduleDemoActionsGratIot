import React from 'react';
import {ScrollView} from 'react-native';
import Button from '../component/Button';

export default () => {
  return (
    <ScrollView>
      <Button
        onPress={() => alert("I'm a box button")}
        name={"I'm a box button"}
        style={{
          marginBottom: 30,
          backgroundColor: 'green',
          height: 200,
          width: 200,
          color: 'white',
          fontSize: 30,
          alignSelf: 'center',
        }}
      />
      <Button
        name={'Button'}
        value={'Button'}
        style={{
          marginBottom: 30,
          backgroundColor: 'red',
          height: 60,
          borderRadius: 20,
          width: 350,
          alignSelf: 'center',
        }}
        iconLeftStyle={{
          size: 30,
          color: 'rgb(0, 145, 187)',
          type: 'FontAwesome',
          name: 'power-off',
        }}
        iconRightStyle={{
          size: 30,
          color: 'rgb(0, 145, 187)',
          type: 'FontAwesome',
          name: 'angle-right',
        }}
      />
    </ScrollView>
  );
};
