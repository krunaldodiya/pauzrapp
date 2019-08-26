import React from 'react';

interface IconProps {
  type:
    | 'AntDesign'
    | 'MaterialIcons'
    | 'EvilIcons'
    | 'Entypo'
    | 'FontAwesome'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'Zocial'
    | 'Octicons'
    | 'SimpleLineIcons';
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  onPress?: Function;
}

export default (props: IconProps): JSX.Element => {
  switch (props.type) {
    case 'AntDesign': {
      const AntDesign = require('react-native-vector-icons/AntDesign').default;
      return (
        <AntDesign
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'Entypo': {
      const Entypo = require('react-native-vector-icons/Entypo').default;
      return (
        <Entypo
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'Ionicons': {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'SimpleLineIcons': {
      const SimpleLineIcons = require('react-native-vector-icons/SimpleLineIcons').default;
      return (
        <SimpleLineIcons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'EvilIcons': {
      const EvilIcons = require('react-native-vector-icons/EvilIcons').default;
      return (
        <EvilIcons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'MaterialIcons': {
      const MaterialIcons = require('react-native-vector-icons/MaterialIcons').default;
      return (
        <MaterialIcons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'FontAwesome': {
      const FontAwesome = require('react-native-vector-icons/FontAwesome').default;
      return (
        <FontAwesome
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'Foundation': {
      const Foundation = require('react-native-vector-icons/Foundation').default;
      return (
        <Foundation
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'MaterialCommunityIcons': {
      const MaterialCommunityIcons = require('react-native-vector-icons/MaterialCommunityIcons')
        .default;
      return (
        <MaterialCommunityIcons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'Zocial': {
      const Zocial = require('react-native-vector-icons/Zocial').default;
      return (
        <Zocial
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    case 'Octicons': {
      const Octicons = require('react-native-vector-icons/Octicons').default;
      return (
        <Octicons
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }

    default: {
      const MaterialIcons = require('react-native-vector-icons/MaterialIcons').default;
      return (
        <MaterialIcons
          name={props.name}
          color="#000"
          size={18}
          onPress={props.onPress ? props.onPress : null}
          style={props.style ? props.style : {}}
        />
      );
    }
  }
};
