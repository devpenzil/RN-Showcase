import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './Storage.style';
import {storage} from '../../storage/mmkvStorage';
import Header from '../../components/header/Header';

const Storage = () => {
  const [value, setValue] = useState({
    key: '',
    value: '',
  });
  const setStorage = () => {
    storage.set(value.key, value.value);
  };
  return (
    <SafeAreaView>
      <Header />
      <View style={style.container}>
        <TextInput
          placeholder="key"
          style={style.input}
          onChangeText={e => {
            setValue({...value, key: e});
          }}
        />
        <TextInput
          placeholder="value"
          style={style.input}
          onChangeText={e => {
            setValue({...value, value: e});
          }}
        />
        <TouchableOpacity style={style.button} onPress={setStorage}>
          <Text style={style.btnText}>Save</Text>
        </TouchableOpacity>
        <FlatList
          data={storage.getAllKeys()}
          renderItem={({item}) => {
            return (
              <>
                <View style={style.list}>
                  <Text>{item}</Text>
                  <Text>{storage.getString(item)}</Text>
                  <Text
                    style={{color: 'red'}}
                    onPress={() => {
                      storage.delete(item);
                    }}>
                    Delete
                  </Text>
                </View>
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Storage;
