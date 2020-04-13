import React from 'react';
import Header from '../../component/Header';
import ActionButton from '../../component/ActionButton';

export default function ListAction({navigation, route, listActions}) {
  const {navigate, goBack} = navigation;
  const {id, deviceName, roomId, status, actions} = route.params;
  const onPressActionButton = value => {
    if (value) {
      if (value.command == 'action') {
        navigate('ListAction', route.params);
      } else {
        navigate('DetailAction', value);
      }
    }
  };

  return (
    <>
      <Header onLeft={goBack} nameScreen={'Danh sách hành động'} />

      {/* ListAction */}
      <ActionButton
        isShowDetail={true}
        listActions={listActions}
        actions={actions}
        onPress={onPressActionButton}
      />
    </>
  );
}