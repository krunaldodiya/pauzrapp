import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries} from '../store/actions';

const renderSeparator = () => {
  return <View style={{height: 1, backgroundColor: '#ccc'}} />;
};

const renderItem = (data: any) => {
  return (
    <View style={{padding: 10}}>
      <Text style={{color: 'white'}}>{data.item.name}</Text>
    </View>
  );
};

const SelectCountry = () => {
  const countries = useSelector((state: any) => state.location.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountries(null));
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#0D62A2'}}>
        <FlatList
          keyboardShouldPersistTaps="handled"
          keyExtractor={(_, index) => index.toString()}
          data={countries}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SelectCountry);
