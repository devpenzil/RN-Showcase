/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const Touch = () => {
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const animateBall = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      borderRadius: 50,
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });
  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onActive: (event, ctx) => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: (event, ctx) => {
      console.log('end');
    },
  });
  return (
    <SafeAreaView>
      <Header />
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[animateBall]} />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Touch;
