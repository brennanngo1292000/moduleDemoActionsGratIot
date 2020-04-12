import React from 'react';
import {Text, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import IconButton, {PropIconButton} from '../IconButton';

export const PropButton = {
  name: String,
  onPress: Function,
  onPressIn: Function,
  onPressOut: Function,
  style: Object,
  value: String,
  iconRightStyle: PropIconButton,
  iconLeftStyle: PropIconButton,
};

export default (props = PropButton) => {
  const {
    name,
    style,
    onPress,
    onPressIn,
    onPressOut,
    iconRightStyle,
    iconLeftStyle,
    value,
  } = props;

  //style
  const {fontSize, color} = style;
  const {buttonStyle} = styles;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View
        style={{
          ...buttonStyle,
          ...style,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {iconLeftStyle ? <IconButton {...iconLeftStyle} /> : <></>}
          <Text style={{marginLeft: 5, fontSize: fontSize, color: color}}>
            {name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'rgb(200,200,200)',
              marginRight: 5,
              fontSize: fontSize,
            }}>
            {value}
          </Text>
          {iconRightStyle ? (
            <IconButton onPress={onPress} {...iconRightStyle} />
          ) : <></>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    height: 60,
    borderColor: 'rgb(200,200,200)',
    borderBottomWidth: 0.3,
  },
})