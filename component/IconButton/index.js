import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

import Icon, {Prop} from '../Icon';

export const PropIconButton = {
  ...Prop,
  disable: Boolean,
  onPress: Function,
  onPressIn: Function,
  onPressOut: Function,
};

export default (props = PropIconButton) => {
  const {
    size,
    color,
    name,
    type,
    onPress,
    onPressIn,
    onPressOut,
    disable,
  } = props;
  if (disable) {
    return <Icon size={size} color={color} name={name} type={type} />;
  }
  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPress={onPress}
      onPressOut={onPressOut}>
      <View>
        <Icon size={size} color={color} name={name} type={type} />
      </View>
    </TouchableWithoutFeedback>
  );
};
