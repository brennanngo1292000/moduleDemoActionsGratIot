import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Header from '../../component/Header';
import ActionButton from '../../component/ActionButton';

const widthScreen = Dimensions.get('screen').width;

export default function History({navigation, route, listActions}) {
  const {navigate, goBack} = navigation;
  const {id, deviceName, roomId, status, actions} = route.params;
  const {col1, col2, col3, bgListHistories, bgThead} = styles;
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
      <Header onLeft={goBack} nameScreen={'Lịch sử'} />

      <ActionButton
        listActions={listActions}
        actions={actions}
        onPress={onPressActionButton}
      />

      <View style={bgListHistories}>
        <View style={bgThead}>
          <Text style={{...col1}}>Thời gian</Text>
          <Text style={{...col2}}> Trạng thái</Text>
          <Text style={{...col3}}>Cách thức</Text>
        </View>

        {/* Render list histories here */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  col1: {flex: 3, textAlign: 'center', paddingLeft: 5, fontWeight: '400'},
  col2: {flex: 2, textAlign: 'center', paddingLeft: 5, fontWeight: '400'},
  col3: {flex: 2, textAlign: 'center', paddingLeft: 5, fontWeight: '400'},
  bgListHistories: {
    width: widthScreen - 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'rgb(200,200,200)',
    borderWidth: 1,
    marginVertical: 10,
  },
  bgThead: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    borderBottomColor: 'rgb(200,200,200)',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: widthScreen - 20,
  },
});
