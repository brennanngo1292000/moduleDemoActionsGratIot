import React from 'react';
import Header from '../../component/Header';
import ValueButton from '../../component/ValueButton';

export default function ListAction({navigation, route}) {
  const {goBack} = navigation;
  const {command, value_type, values, name, setNewValue} = route.params;
  const onPressValueButton = value => {
    setNewValue(value);
    goBack();
  };

  return (
    <>
      <Header onLeft={goBack} nameScreen={name} />

      {/* ListAction */}
      <ValueButton
      command={command}
      values={values}
      value_type={value_type}
      onPress={onPressValueButton}
      />
    </>
  );
}