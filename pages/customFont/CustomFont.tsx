import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const CustomFont = () => {
  return (
    <SafeAreaView>
      <Text style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        blanditiis repellendus! Soluta magnam magni optio nostrum illo autem,
        sunt distinctio saepe, repellendus quasi voluptatem rem, id beatae dolor
        commodi et?
      </Text>
    </SafeAreaView>
  );
};

export default CustomFont;
const style = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: '800',
    padding: 30,
    textAlign: 'justify',
    fontFamily: 'SFUIbarbarti',
  },
});
