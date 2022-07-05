import {View, Text} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const Capacity = () => {
  const navigation = useNavigation();
  return (
    <Animated.View style={[t.mT4]} entering={FadeIn}>
      <Text
        style={[t.fontBold, t.textLg]}
        onPress={() => {
          navigation.navigate('lottie');
        }}>
        Capacity
      </Text>
      <View style={[t.mT2, t.bgGray200, t.p4, t.roundedLg]}>
        <Text style={[t.fontLight]}>Capacity data</Text>
        <View
          style={[t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mT2]}>
          <Text>Estimated debt</Text>
          <Text style={[t.fontBold]}>$ 1,200</Text>
        </View>
        <View
          style={[t.flex, t.flexRow, t.justifyBetween, t.itemsCenter, t.mT1]}>
          <Text>Estimated debt</Text>
          <Text style={[t.fontBold]}>$ 1,200</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default Capacity;
