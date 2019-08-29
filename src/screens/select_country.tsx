import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries} from '../store/actions';

const filteredLocation = () => {
  return [];
};

const renderSeparator = () => {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

const renderItem = () => {
  return (
    <View>
      <Text>y</Text>
    </View>
  );
};

const SelectCountry = () => {
  const countries = useSelector((state: any) => state.location.countries);
  const dispatch = useDispatch();

  if (!countries.length) {
    useEffect(() => {
      dispatch(getCountries(null));
    }, []);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <FlatList
          keyboardShouldPersistTaps="handled"
          keyExtractor={(_, index) => index.toString()}
          data={filteredLocation()}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SelectCountry);
