import React, {useState} from 'react';
import {View} from 'react-native';
import IconButton from '../component/IconButton';

export default () => {
  const [color, setColor] = useState('red');

  const onPress = () => {
    setColor('yellow');
  };

  const onPressIn = () => {
    setColor('green');
  };

  const onPressOut = () => {
    setColor('red');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <IconButton
        size={400}
        color={color}
        name={'ios-heart-dislike'}
        type={'Ionicons'}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      />
    </View>
  );
};
