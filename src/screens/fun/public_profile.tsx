import React, {useEffect, useState} from 'react';
import {Dimensions, Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList, NavigationScreenProp} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../components/Icon';
import getAssets from '../../libs/image';
import theme from '../../libs/theme';
import {getAuthUserSelector} from '../../store/selectors/auth_user';

interface PublicProfileProps {
  navigation: NavigationScreenProp<any, any>;
}

const PublicProfile = (props: PublicProfileProps) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    const getPosts: any = dispatch({type: 'post/getPosts', payload: meta});

    getPosts.then((data: any) => {
      setMeta(data);
    });
  }, []);

  const authUser = useSelector(getAuthUserSelector);
  const posts = useSelector((state: any) => state.post.posts);

  const postsList = Object.keys(posts)
    .map(key => posts[key])
    .sort((a: any, b: any) => b.id - a.id);

  const renderItem = (data: any) => {
    const {item} = data;
    const size = Dimensions.get('screen').width / 3 - 2;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 1,
          maxWidth: size,
        }}>
        <Image style={{width: size, height: size}} source={{uri: getAssets(item.url)}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0D62A2" />

      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 70, height: 70, borderRadius: 35}}
                source={{uri: getAssets(authUser.avatar)}}
              />
            </View>
          </View>

          <View style={{flex: 3, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  marginBottom: 5,
                  color: '#000',
                  fontSize: 20,
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontWeight: 'bold',
                }}>
                350
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontWeight: '600',
                }}>
                Posts
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  marginBottom: 5,
                  color: '#000',
                  fontSize: 20,
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontWeight: 'bold',
                }}>
                55K
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontWeight: '600',
                }}>
                Followers
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  marginBottom: 5,
                  color: '#000',
                  fontSize: 20,
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  fontWeight: 'bold',
                }}>
                15
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                  fontWeight: '600',
                }}>
                Following
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 5}}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: theme.fonts.TitilliumWebBold,
              marginBottom: 5,
            }}>
            {authUser.name}
          </Text>

          {authUser.bio && (
            <Text
              style={{
                color: '#404040',
                fontSize: 13,
                fontFamily: theme.fonts.TitilliumWebRegular,
              }}>
              {authUser.bio}
            </Text>
          )}
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  backgroundColor: 'white',
                  height: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => null}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                  }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{
                  marginLeft: 5,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  backgroundColor: 'white',
                  height: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => null}>
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                  }}>
                  Create Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: 10, marginBottom: 1, borderTopColor: '#eee', borderTopWidth: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => setTab(0)}
                style={{
                  height: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: tab === 0 ? '#555' : '#eee',
                  borderBottomWidth: 1,
                  padding: 20,
                }}>
                <Icon
                  name="grid"
                  type="SimpleLineIcons"
                  style={{color: tab === 0 ? '#555' : '#aaa', fontSize: 18}}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => setTab(1)}
                style={{
                  height: 32,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomColor: tab === 1 ? '#555' : '#eee',
                  borderBottomWidth: 1,
                  padding: 20,
                }}>
                <Icon
                  name="heart"
                  type="SimpleLineIcons"
                  style={{color: tab === 1 ? '#555' : '#aaa', fontSize: 18}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <FlatList
            numColumns={3}
            keyboardShouldPersistTaps="handled"
            data={postsList}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            // onEndReached={this.getFeeds}
            // onEndReachedThreshold={0.5}
            // ListFooterComponent={this.showLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(PublicProfile);
