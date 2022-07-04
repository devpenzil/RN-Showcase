import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Buttons.style';

const Buttons = () => {
  return (
    <View style={style.btnContainer}>
      <TouchableOpacity style={[style.btn, style.ghostBtn]}>
        <Text style={[style.btnText, style.ghostBtnText]}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.btn, style.primaryBtn]}>
        <Text style={[style.btnText, style.primaryBtnText]}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
