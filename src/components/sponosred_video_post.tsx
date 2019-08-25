import {observer} from 'mobx-react';
import {Icon} from 'native-base';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import FeedStore from '../stores/feed';

interface SponsoredVideoPostProps {
  data: any;
}

interface SponsoredVideoPostState {
  muted: boolean;
}

class SponsoredVideoPost extends React.PureComponent<
  SponsoredVideoPostProps,
  SponsoredVideoPostState
> {
  state = {
    muted: false,
  };

  onLayout = (event: any) => {
    console.log(event.nativeEvent);
  };

  render() {
    const {data} = this.props;
    const {viewableItem} = FeedStore;
    const {muted} = this.state;

    const {item, index} = data;
    const paused = viewableItem != index;
    const {width} = Dimensions.get('window');

    return (
      <TouchableHighlight
        onPress={() => {
          if (viewableItem == index) {
            this.setState({muted: !muted});
          }
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
            onLayout={this.onLayout}
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

export default observer(SponsoredVideoPost);
