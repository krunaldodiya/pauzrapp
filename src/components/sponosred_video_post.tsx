import {Icon} from 'native-base';
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import FeedStore from '../stores/feed';

interface SponsoredVideoPostProps {
  data: any;
  viewableItem: any;
  muted: boolean;
}

const SponsoredVideoPost = (props: SponsoredVideoPostProps) => {
  const {data, viewableItem, muted} = props;
  const {item, index} = data;
  const paused = viewableItem != null && viewableItem.index != index;
  const {width} = Dimensions.get('window');

  return (
    <TouchableHighlight
      onPress={() => {
        if (viewableItem.index == index) {
          FeedStore.updateMutedIndex();
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
};

export default SponsoredVideoPost;
