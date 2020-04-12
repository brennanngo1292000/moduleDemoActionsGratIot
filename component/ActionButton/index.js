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

export default props => {
  const {
    listActions,
    actions,
    onPressIn,
    onPressOut,
    onPress,
    isShowDetail,
    style,
  } = props;

  const [listActionDetail, setListActionDetail] = useState(null);

  const onPressButton = value => {
    if (onPress) onPress(value);
  };

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
                command: 'Hành động',
                action: 'Hành động',
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
            <Button
              style={{...style}}
              onPress={() => onPressButton(item)}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              key={index}
              name={item.name}
              iconRightStyle={{
                size: 20,
                color: 'black',
                type: 'FontAwesome',
                name: 'angle-right',
              }}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
