import React, {PureComponent} from 'react';
import {Button, FlatList, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import AffiliateImagePost from '../components/affiliate_image_post';
import AffiliateVideoPost from '../components/affiliate_video_post';
import RegularImagePost from '../components/regular_image_post';
import RegularVideoPost from '../components/regular_video_post';
import SponsoredVideoPost from '../components/sponosred_video_post';
import SponsoredImagePost from '../components/sponsored_image_post';
import User from '../models/user';
import AuthProvider from '../store/providers/auth';

interface PostProps {
  navigation: NavigationScreenProp<any, any>;
  auth: AuthProvider;
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
    const {auth} = this.props;
    const user = auth.authUser;

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="black" />

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
