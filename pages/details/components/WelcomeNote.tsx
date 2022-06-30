import {Text} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import Animated, {FadeIn} from 'react-native-reanimated';

const WelcomeNote = () => {
  return (
    <Animated.View
      style={[
        t.bgGreen100,
        t.p4,
        t.roundedLg,
        t.border,
        t.borderGreen600,
        t.mT6,
      ]}
      entering={FadeIn}>
      <Text style={[t.textXl, t.fontBold, t.textGreen600]}>Welcome, </Text>
      <Text style={[t.mT2, t.fontLight]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, rem.
        Modi dicta aspernatur nemo quis ipsa
      </Text>
      <Text style={[t.mT2, t.underline, t.textGreen600]}>Dismiss</Text>
    </Animated.View>
  );
};

export default WelcomeNote;
