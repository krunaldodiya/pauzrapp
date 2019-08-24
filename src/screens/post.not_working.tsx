// import FeedStore from '../stores/feed';
import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
  View,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

const Video = require('react-native-video').default;

interface PostProps {
  navigation: NavigationScreenProp<any, any>;
}

interface PostState {
  muted: boolean;
  viewableItem: any;
}

interface User {
  name: string;
}

interface Post {
  url: string;
  title?: string;
  description?: string;
  owner: User;
  when: string;
  content_type: 'image' | 'video';
  type: 'regular' | 'sponsored' | 'affiliate';
}

const posts: Post[] = require('./posts.json');

class Post extends PureComponent<PostProps, PostState> {
  state: PostState = {
    muted: false,
    viewableItem: null,
  };

  onViewableItemsChanged = (data: any) => {
    data.viewableItems.forEach((viewableItem: any) => {
      if (viewableItem.item.content_type == 'video') {
        this.setState({muted: false, viewableItem: viewableItem});
        // FeedStore.updateViewableItems(viewableItem);
      }
    });
  };

  renderItem = (data: any) => {
    const {item, index} = data;

    // const {muted, viewableItem} = FeedStore;
    const {muted, viewableItem} = this.state;
    const paused = viewableItem != null && viewableItem.index != index;

    const width = Dimensions.get('window').width;

    return (
      <View
        style={{
          backgroundColor: 'black',
          width: width,
          height: width,
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        {item.content_type == 'image' && (
          <Image
            style={{
              width: width,
              height: width,
            }}
            source={{uri: item.url}}
          />
        )}

        {item.content_type == 'video' && (
          <TouchableHighlight
            onPress={() => {
              if (viewableItem.index == index) {
                this.setState({muted: !muted});
                // FeedStore.updateMutedIndex();
              }
            }}>
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

            {/* {muted && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#000',
                  padding: 5,
                }}>
                <Icon
                  type="MaterialIcons"
                  name="volume-off"
                  style={{color: '#fff', fontSize: 14}}
                />
              </View>
            )} */}
          </TouchableHighlight>
        )}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="black" />

        <View style={{flex: 1}}>
          <FlatList
            initialNumToRender={10}
            data={posts}
            renderItem={this.renderItem}
            keyExtractor={(_, index) => index.toString()}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
            }}
            onViewableItemsChanged={this.onViewableItemsChanged}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default observer(Post);
