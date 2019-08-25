import React, {PureComponent} from 'react';
import {FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

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
        //
      }
    });
  };

  renderItem = (data: {item: Post}) => {
    const {item} = data;

    return (
      <View style={{flex: 1}}>
        <Text>hello {item.content_type}</Text>
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
              viewAreaCoveragePercentThreshold: 100,
            }}
            onViewableItemsChanged={this.onViewableItemsChanged}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Post;
