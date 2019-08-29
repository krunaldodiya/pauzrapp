import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries, setCountry} from '../store/actions';

const SelectCountry = (props: any) => {
  const [keywords, setKeywords] = useState('');
  const countries = useSelector((state: any) => state.location.countries);
  const dispatch = useDispatch();

  const filteredCountries =
    keywords.length >= 3
      ? countries.filter((country: any) => {
          return country.name.match(new RegExp(`^${keywords}`, 'gi'));
        })
      : countries;

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCountries(null));
    }
  }, []);

  const renderSeparator = () => {
    return <View style={{height: 1, backgroundColor: '#ccc'}} />;
  };

  const renderItem = (data: any) => {
    const {item} = data;

    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          dispatch(setCountry({country: item}));
          props.navigation.pop();
        }}>
        <Text style={{color: '#000'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0D62A2" barStyle="light-content" />

      <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
        <TextInput
          placeholder="Filter Country"
          value={keywords}
          onChangeText={value => setKeywords(value)}
        />

        <FlatList
          keyboardShouldPersistTaps="handled"
          keyExtractor={(_, index) => index.toString()}
          data={filteredCountries}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SelectCountry);
