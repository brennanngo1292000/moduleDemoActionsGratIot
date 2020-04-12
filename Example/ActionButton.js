import {actionDevice1, actionDevice2, listActions} from './fakeData';
import ActionButton from '../component/ActionButton';
import React from 'react';

export default () => {
  return (
    <>
      {/* many action */}
      <ActionButton
        actions={actionDevice1}
        listActions={listActions}
        style={{marginBottom: 20, backgroundColor: 'green'}}
      />

      {/* see detail for many action */}

      <ActionButton
        isShowDetail={true}
        actions={actionDevice1}
        listActions={listActions}
        style={{backgroundColor: 'red'}}
        onPress={(value)=>alert(value)}
      />

      {/* one action */}
      <ActionButton
        actions={actionDevice2}
        listActions={listActions}
        style={{marginTop: 20, backgroundColor: 'yellow'}}
      />
    </>
  );
};
