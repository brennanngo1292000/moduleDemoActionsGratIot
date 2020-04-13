import React, {useState, useEffect} from 'react';
import Button from '../Button';

export const Prop = {
  listActions: Array /*[{command:value, name:value1, action:value2, controll:value3, listen:value4, value_type:value5, values:Array}]*/,
  actions: Array, //{command:value, action:value2}
  onPress: Function,
  onPressIn: Function,
  onPressOut: Function,
  isShowDetail: Boolean,
  style: Object,
};

export const PropActionButtonItem = {
  onPress: Function,
  isShowDetail: Boolean,
  style: Object,
  actionInfo: Object /*{command:value, name:value1, action:value2, controll:value3, listen:value4, value_type:value5, values:Array}*/,
};

export const ActionButtonItem = (props = PropActionButtonItem) => {
  const {style, onPress, actionInfo} = props;
  const {name, value} = actionInfo;
  const [newValue, setNewValue] = useState(value);
  const onPressButton = () => {
    if (onPress) onPress({...actionInfo, setNewValue});
  };

  return (
    <Button
      style={{...style}}
      onPress={onPressButton}
      name={name}
      iconRightStyle={{
        size: 20,
        color: 'black',
        type: 'FontAwesome',
        name: 'angle-right',
      }}
      value={newValue}
    />
  );
};

export default (props = Prop) => {
  const {listActions, actions, onPress, isShowDetail, style} = props;

  const [listActionDetail, setListActionDetail] = useState(null);
  const findActionDetail = (listActions, actions) => {
    return listActions.filter(item => {
      for (let i = 0; i < actions.length; i++) {
        if (actions[i].command == item.command) return true;
      }
    });
  };

  useEffect(() => {
    (async () => {
      if (isShowDetail) {
        const newList = await findActionDetail(listActions, actions);
        await setListActionDetail(newList);
      } else {
        if (actions.length > 1) {
          {
            await setListActionDetail([
              {
                name: 'Hành động',
                command: 'action',
                action: 'action',
                //add property or edit property
              },
            ]);
          }
        } else {
          const newList = await findActionDetail(listActions, actions);
          await setListActionDetail(newList);
        }
      }
    })();
  }, []);

  return (
    <>
      {listActionDetail ? (
        listActionDetail.map((item, index) => {
          return (
            <ActionButtonItem
              style={{...style}}
              onPress={onPress}
              key={index}
              actionInfo={item}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
