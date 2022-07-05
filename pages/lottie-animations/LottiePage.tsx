import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const LottiePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <AnimatedLottieView
        source={require('../../assets/animation/logoAnimation.json')}
        style={{width: '100%', height: 300}}
        autoPlay
        loop
      />
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Go Back
      </Text>
    </SafeAreaView>
  );
};

export default LottiePage;
