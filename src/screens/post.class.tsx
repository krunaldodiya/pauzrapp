import React, {PureComponent} from 'react';
import {Button, FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useSelector} from 'react-redux';
import AffiliateImagePost from '../components/Posts/affiliate_image_post';
import AffiliateVideoPost from '../components/Posts/affiliate_video_post';
import RegularImagePost from '../components/Posts/regular_image_post';
import RegularVideoPost from '../components/Posts/regular_video_post';
import SponsoredVideoPost from '../components/Posts/sponosred_video_post';
import SponsoredImagePost from '../components/Posts/sponsored_image_post';
import User from '../models/user';

interface PostProps {
  navigation: NavigationScreenProp<any, any>;
  changeName: any;
}

interface PostState {}

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
    const state = useSelector((state: any) => state);
    const user = state.auth.authUser;

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

        <View>
          <Button title="change name" onPress={this.props.changeName} />
          <Text>{user && user.name}</Text>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            initialNumToRender={10}
            data={posts}
            renderItem={this.renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Post;
