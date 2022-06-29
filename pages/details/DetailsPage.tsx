import {View, SafeAreaView} from 'react-native';
import React from 'react';
import WelcomeNote from './components/WelcomeNote';
import HeaderwithBack from './components/HeaderwithBack';
import {t} from 'react-native-tailwindcss';
const DetailsPage = () => {
  return (
    <SafeAreaView>
      <View style={[t.p5]}>
        <HeaderwithBack />
        <WelcomeNote />
      </View>
    </SafeAreaView>
  );
};

export default DetailsPage;
