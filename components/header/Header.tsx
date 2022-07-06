import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{fontSize: 16, padding: 10, color: 'blue'}}
        onPress={() => {
          navigation.navigate('home');
        }}>
        Back to home
      </Text>
    </View>
  );
};

export default Header;
