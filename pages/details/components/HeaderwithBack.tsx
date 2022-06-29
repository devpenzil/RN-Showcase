import {TouchableOpacity} from 'react-native';
import React from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import {t} from 'react-native-tailwindcss';

const HeaderwithBack = () => {
  return (
    <TouchableOpacity style={[t.w8, t.roundedFull, t.mT3, t.mB3]}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default HeaderwithBack;
