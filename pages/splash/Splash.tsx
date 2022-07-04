import {View, SafeAreaView} from 'react-native';
import React from 'react';
import Buttons from './components/buttons/Buttons';
import {style} from './Splash.style';
import MainSection from './components/mainsection/MainSection';

const Splash = () => {
  return (
    <SafeAreaView>
      <View style={style.areaforAnim} />
      <View style={style.container}>
        <MainSection />
        <Buttons />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
