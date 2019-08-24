import React, {PureComponent} from 'react';
import {FlatList, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

const dataFactory = () => {
  const array = [];

  for (let index = 0; index < 1000; index++) {
    array.push(index + 1);
  }

  return array;
};

interface HomeProps {
  navigation: NavigationScreenProp<any, any>;
}

interface HomeState {
  data: number[];
}

class Home extends PureComponent<HomeProps, HomeState> {
  state: HomeState = {
    data: [],
  };

  componentDidMount() {
    this.setState({data: dataFactory()});
  }

  renderItem = (data: any) => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          marginBottom: 10,
          height: 300,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 22, color: 'red', textAlign: 'center'}}>
          yahoo #{data.index + 1}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          initialNumToRender={5}
          data={dataFactory()}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    );
  }
}
export default Home;
