import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import AffiliateImagePost from '../components/affiliate_image_post';
import AffiliateVideoPost from '../components/affiliate_video_post';
import RegularImagePost from '../components/regular_image_post';
import RegularVideoPost from '../components/regular_video_post';
import SponsoredVideoPost from '../components/sponosred_video_post';
import SponsoredImagePost from '../components/sponsored_image_post';
import FeedStore from '../stores/feed';

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
        FeedStore.updateViewableItems(viewableItem.index);
      }
    });
  };

  renderItem = (data: any) => {
    const {item} = data;

    return (
      <React.Fragment>
        {item.type == 'regular' && item.content_type == 'image' && <RegularImagePost data={data} />}

        {item.type == 'regular' && item.content_type == 'video' && <RegularVideoPost data={data} />}

        {item.type == 'sponsored' && item.content_type == 'image' && (
          <SponsoredImagePost data={data} />
        )}

        {item.type == 'sponsored' && item.content_type == 'video' && (
          <SponsoredVideoPost data={data} />
        )}

        {item.type == 'affiliate' && item.content_type == 'image' && (
          <AffiliateImagePost data={data} />
        )}

        {item.type == 'affiliate' && item.content_type == 'video' && (
          <AffiliateVideoPost data={data} />
        )}
      </React.Fragment>
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
