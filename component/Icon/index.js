import React from 'react';

// add type icon
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const Prop = {
  type: String,
  size: String || Number,
  color: String,
  name: String,
};

export default (props ) => {
  const {type, size, name, color} = props;

  if (type) {
    const typeCheck = type.toLowerCase();
    const sizeIcon = Number(size);
    switch (typeCheck) {
      case 'feather':
        return <Feather name={name} size={sizeIcon} color={color} />;
      case 'ionicons':
        return <Ionicons name={name} size={sizeIcon} color={color} />;
      case 'materialcommunityicons':
        return (
          <MaterialCommunityIcons name={name} size={sizeIcon} color={color} />
        );
      case 'materialicons':
        return <MaterialIcons name={name} size={sizeIcon} color={color} />;
      case 'fontawesome':
        return <FontAwesome name={name} size={sizeIcon} color={color} />;
      case 'fontawesome5':
        return <FontAwesome5 name={name} size={sizeIcon} color={color} />;
      case 'fontawesome5pro':
        return <FontAwesome5Pro name={name} size={sizeIcon} color={color} />;
      case 'fontisto':
        return <Fontisto name={name} size={sizeIcon} color={color} />;

      // add type icon

      default:
        return;
    }
  }
};
