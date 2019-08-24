import React, {PureComponent} from 'react';
import {Dimensions, FlatList, Image, View, SafeAreaView, StatusBar} from 'react-native';
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

const data: Post[] = require('./posts.json');

class Post extends PureComponent<PostProps, PostState> {
  state: PostState = {
    muted: false,
    viewableItem: null,
  };

  onViewableItemsChanged = (data: any) => {
    data.viewableItems.forEach((viewableItem: any) => {
      if (viewableItem.item.content_type == 'video') {
        this.setState({viewableItem: viewableItem});
      }
    });
  };

  renderItem = (data: any) => {
    console.log(data);

    const {muted, viewableItem} = this.state;
    const {item, index} = data;
    const paused = viewableItem != null && viewableItem.index != index;

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="black" />

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
          )}
        </View>
      </SafeAreaView>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          initialNumToRender={5}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
      </View>
    );
  }
}
export default Post;
