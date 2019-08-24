import {observer} from 'mobx-react';
import React from 'react';
import {Dimensions, Image, TouchableHighlight, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FeedStore from '../stores/feed';

const Video = require('react-native-video').default;

interface PostProps {
  navigation: NavigationScreenProp<any, any>;
  data: any;
}

const PostLayout = (props: PostProps) => {
  const {data} = props;
  const {item, index} = data;

  const {playing_index, muted} = FeedStore;
  const playing = playing_index != null && playing_index == index;

  return (
    <View
      style={{
        backgroundColor: 'black',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        marginBottom: 10,
        justifyContent: 'center',
      }}>
      {item.content_type == 'image' && (
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
          source={{uri: item.url}}
        />
      )}

      {item.content_type == 'video' && (
        <TouchableHighlight onPress={() => FeedStore.updateMutedIndex(index)}>
          <Video
            source={{uri: item.url}}
            style={{
              width: Dimensions.get('window').width - 2,
              height: (Dimensions.get('window').width * 3) / 4,
              backgroundColor: 'black',
            }}
            paused={!playing}
            muted={muted}
            controls={false}
          />
        </TouchableHighlight>
      )}
    </View>
  );
};

export default observer(PostLayout);
