import {Icon} from 'native-base';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Video from 'react-native-video';

interface AffiliateVideoPostProps {
  data: any;
}

interface AffiliateVideoPostState {
  paused: boolean;
  muted: boolean;
}

class AffiliateVideoPost extends React.PureComponent<
  AffiliateVideoPostProps,
  AffiliateVideoPostState
> {
  state = {
    paused: true,
    muted: false,
  };

  render() {
    const {data} = this.props;
    const {muted, paused} = this.state;

    const {item} = data;
    const {width} = Dimensions.get('window');

    const poster = item.url
      .replace('video/upload/', 'video/upload/e_blur:100/w_300/')
      .replace('.mp4', '.jpg');

    return (
      <TouchableHighlight
        onPress={() => {
          this.setState({muted: !muted});
        }}>
        <View>
          <Video
            source={{uri: item.url}}
            style={{
              width: width - 2,
              height: (width * 3) / 4,
              backgroundColor: 'black',
            }}
            paused={paused}
            muted={muted}
            controls={false}
            poster={poster}
            posterResizeMode="cover"
          />

          {muted && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: '#000',
                padding: 5,
              }}>
              <Icon type="MaterialIcons" name="volume-off" style={{color: '#fff', fontSize: 14}} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    );
  }
}

export default AffiliateVideoPost;
