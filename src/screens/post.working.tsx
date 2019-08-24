import React, {PureComponent} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {Icon} from 'native-base';

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

const data: Post[] = require('./posts.json');

class Post extends PureComponent<PostProps, PostState> {
  state: PostState = {
    muted: false,
    viewableItem: null,
  };

  onViewableItemsChanged = (data: any) => {
    data.viewableItems.forEach((viewableItem: any) => {
      if (viewableItem.item.content_type == 'video') {
        this.setState({muted: false, viewableItem: viewableItem});
      }
    });
  };

  renderItem = (data: any) => {
    const {muted, viewableItem} = this.state;
    const {item, index} = data;
    const paused = viewableItem != null && viewableItem.index != index;

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
          <TouchableHighlight
            onPress={() => {
              if (viewableItem.index == index) {
                this.setState({muted: !this.state.muted});
              }
            }}>
            <Video
              source={{uri: item.url}}
              style={{
                width: Dimensions.get('window').width - 2,
                height: (Dimensions.get('window').width * 3) / 4,
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
                <Icon
                  type="MaterialIcons"
                  name="volume-off"
                  style={{color: '#fff', fontSize: 14}}
                />
              </View>
            )}
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
            data={data}
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

export default Post;
