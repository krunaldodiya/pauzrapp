import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import getAuthUserSelector from '../../store/selectors/auth_user';

interface PublicProfileProps {
  navigation: NavigationScreenProp<any, any>;
}

const PublicProfile = (props: PublicProfileProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'post/getPosts', payload: {}});
  }, []);

  // const authUserId = useSelector((state: any) => state.auth.authUserId);
  // const users = useSelector((state: any) => state.user.users);
  // const authUser = authUserId ? users[authUserId] : null;

  const state = useSelector((state: any) => state);
  const authUser = getAuthUserSelector(state);

  const posts = useSelector((state: any) => state.post.posts);
  const postsList = Object.keys(posts)
    .map(key => posts[key])
    .sort((a: any, b: any) => b.id - a.id);

  console.log('authUser', authUser);
  console.log('postsList', postsList);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(PublicProfile);
