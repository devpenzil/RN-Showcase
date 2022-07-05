/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {styles} from './ModalComp.style';
import Animated, {FadeIn, BounceInUp, FadeOut} from 'react-native-reanimated';
interface modalIntreface {
  isOpen: boolean;
  heading: string;
  content: string;
  buttons: {
    name: string;
    action: () => void;
    textColor: string;
    buttonColor: string;
    borderColor?: string;
  }[];
  image?: any;
}
const ModalComp = ({
  isOpen,
  content,
  heading,
  buttons,
  image,
}: modalIntreface) => {
  return (
    <>
      {isOpen && (
        <Animated.View
          style={styles.container}
          entering={FadeIn}
          exiting={FadeOut}>
          <Animated.View style={styles.card} entering={BounceInUp}>
            {image && <Image source={image} style={styles.image} />}
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.content}>{content}</Text>
            <View style={styles.buttonGroup}>
              {buttons[0] && (
                <TouchableOpacity
                  onPress={buttons[0].action}
                  style={[
                    styles.button,
                    {
                      backgroundColor: buttons[0].buttonColor,
                      borderColor:
                        buttons[0].borderColor || buttons[0].buttonColor,
                      width: buttons[1] === undefined ? '80%' : '45%',
                    },
                  ]}>
                  <Text
                    style={[styles.buttonText, {color: buttons[0].textColor}]}>
                    {buttons[0].name}
                  </Text>
                </TouchableOpacity>
              )}
              {buttons[1] && (
                <TouchableOpacity
                  onPress={buttons[1].action}
                  style={[
                    styles.button,
                    {
                      backgroundColor: buttons[1].buttonColor,
                      borderColor:
                        buttons[1].borderColor || buttons[1].buttonColor,
                    },
                  ]}>
                  <Text
                    style={[styles.buttonText, {color: buttons[1].textColor}]}>
                    {buttons[1].name}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
};

export default ModalComp;
