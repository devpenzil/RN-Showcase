import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './Main.style';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const MainSection = () => {
  const position = useSharedValue({top: 0, left: 0, width: 0, Height: 0});
  const charecteRef = useAnimatedRef();
  const capacityRef = useAnimatedRef();
  const capitalRef = useAnimatedRef();
  const animateGreenScreen = useAnimatedStyle(() => {
    return {
      bottom: withTiming(position.value.top, {
        duration: 200,
      }),
      left: withTiming(position.value.left, {
        duration: 200,
      }),
      width: withTiming(position.value.width, {
        duration: 200,
      }),
      height: withTiming(position.value.Height, {
        duration: 200,
      }),
    };
  });

  const charecterWorklet = () => {
    runOnUI(() => {
      'worklet';
      charecteRef();
      if (charecteRef) {
        console.log('Measures =>', measure(charecteRef));
        position.value = {
          top: measure(charecteRef).y + 5,
          left: measure(charecteRef).x,
          Height: measure(charecteRef).height,
          width: measure(charecteRef).width,
        };
      } else {
        console.log('element not ready');
      }
    })();
  };
  const capacityWorklet = () => {
    runOnUI(() => {
      'worklet';
      capacityRef();
      if (capacityRef) {
        console.log('Measures =>', measure(capacityRef));
        position.value = {
          top: measure(capacityRef).y + 5,
          left: measure(capacityRef).x,
          Height: measure(capacityRef).height,
          width: measure(capacityRef).width,
        };
      } else {
        console.log('element not ready');
      }
    })();
  };
  const capitalWorklet = () => {
    runOnUI(() => {
      'worklet';
      capitalRef();
      if (capitalRef) {
        console.log('Measures =>', measure(capitalRef));
        position.value = {
          top: measure(capitalRef).y - 50,
          left: measure(capitalRef).x,
          Height: measure(capitalRef).height,
          width: measure(capitalRef).width,
        };
      } else {
        console.log('element not ready');
      }
    })();
  };

  return (
    <View style={style.container}>
      <Animated.View style={[style.greenScreen, animateGreenScreen]} />
      <Text style={style.header}>Get Crazy about your good credit</Text>
      <Text style={style.content}>
        Credit is so much more than a score, supercharge all 3 factors:
        <View ref={charecteRef}>
          <Text style={style.highlight} onPress={charecterWorklet}>
            Charecter
          </Text>
        </View>
        ,{' '}
        <View ref={capacityRef}>
          <Text style={style.highlight} onPress={capacityWorklet}>
            Capacity
          </Text>
        </View>
        and{' '}
        <View ref={capitalRef}>
          <Text style={style.highlight} onPress={capitalWorklet}>
            Capital
          </Text>
        </View>
      </Text>
    </View>
  );
};

export default MainSection;
