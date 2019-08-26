import React from 'react';

interface VectorIconsProps {
  MaterialIcons: string;
  EvilIcons: string;
  Entypo: string;
  FontAwesome: string;
  Foundation: string;
  Ionicons: string;
  MaterialCommunityIcons: string;
  Zocial: string;
  Octicons: string;
  SimpleLineIcons: string;
}

interface IconProps {
  name: string;
  type: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const VectorIcons: VectorIconsProps = {
  MaterialIcons: 'MaterialIcons',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Foundation: 'Foundation',
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Zocial: 'Zocial',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
};

const Icon = (props: IconProps): JSX.Element => {
  switch (props.type) {
    case 'AntDesign': {
      const AntDesign = require('react-native-vector-icons/AntDesign').default;
      return (
        <AntDesign
          name={props.name}
          color={props.color ? props.color : '#000'}
          size={props.size ? props.size : 18}
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
        />
      );
    }

    default: {
      const MaterialIcons = require('react-native-vector-icons/MaterialIcons').default;
      return <MaterialIcons name={props.name} color={'#000'} size={18} />;
    }
  }
};

export {Icon, VectorIcons};
