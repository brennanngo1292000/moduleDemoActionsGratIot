import {listActions} from './fakeData';
import ValueButton from '../component/ValueButton';
import React from 'react';

const valuePower = listActions[0];

const valueColor = listActions[1];

export default () => {
  return (
    <>
      <ValueButton
        command={valuePower.command}
        values={valuePower.values}
        value_type={valuePower.value_type}
      />
       <ValueButton
        command={valueColor.command}
        value_type={valueColor.value_type}
      />
    </>
  );
};
