import React, {useState} from 'react';
import Button from '../Button';
import {ColorPicker} from 'react-native-color-picker';

export const Prop = {
  command: String,
  action: String,
  value_type: String,
  onPress: Function,
  onPressIn: Function,
  onPressOut: Function,
  isShowDetail: Boolean,
  style: Object,
  values: Array /** [{name:value1, controll:value2, listen:value3, value:value4}]*/,
  valueDefault: String,
};

export default (props = Prop) => {

  const {
    command,
    value_type,
    values,
    onPressIn,
    onPressOut,
    onPress,
    style,
    valueDefault,
  } = props;

  const [newValue, setValue] = useState(valueDefault);
  const onSetValue = value => {
    setValue(value);
    if (onPress) onPress(value);
  };

  if (value_type) {
    const typeCheck = value_type.toLowerCase();
    switch (typeCheck) {
      case 'default':
        if (command) {
          const commandCheck = command.toLowerCase();
          switch (commandCheck) {
            case 'power':
              return (
                <>
                  {Array.isArray(values) ? (
                    values.map((item, index) => (
                      <Button
                        name={item.name}
                        value={item.value}
                        key={`${index}`}
                        style={{...style}}
                        onPress={() => onSetValue(item.value)}
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}
                        name={item.name}
                        iconLeftStyle={{
                          size: 30,
                          color:
                            newValue == item.value
                              ? 'rgb(0, 145, 187)'
                              : 'black',
                          type: 'FontAwesome',
                          name: 'power-off',
                        }}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                </>
              );
            default:
              return <></>;
          }
        }
      case 'input':
        const commandCheck = command.toLowerCase();
        switch (commandCheck) {
          case 'color':
            //do something

            return (
              <ColorPicker
                onColorSelected={value => onPress(value)}
                style={{flex: 1, width: '100%', height: 500, padding: 10}}
              />
            );

          default:
            return <></>;
        }
      default:
        return <></>;
    }
  } else {
    return <></>;
  }
};