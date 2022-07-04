import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './Main.style';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const MainSection = () => {
  const position = useSharedValue({top: 0, left: 0});
  const charecterRef = useAnimatedRef();
  const animateGreenScreen = useAnimatedStyle(() => {
    return {
      top: withSpring(position.value.top),
      left: withSpring(position.value.left),
    };
  });

  return (
    <View style={style.container}>
      <Animated.View style={[style.greenScreen, animateGreenScreen]} />
      <Text style={style.header}>Get Crazy about your good credit</Text>
      <Text style={style.content}>
        Credit is so much more than a score, supercharge all 3 factors:
        <Text style={style.highlight}>Charecter</Text>,{' '}
        <Text
          style={style.highlight}
          onPress={() => {
            position.value = {top: 40, left: 50};
          }}
          ref={charecterRef}>
          Capacity
        </Text>{' '}
        and <Text style={style.highlight}>Capital</Text>{' '}
      </Text>
    </View>
  );
};

export default MainSection;
