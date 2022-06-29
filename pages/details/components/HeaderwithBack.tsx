import {TouchableOpacity} from 'react-native';
import React from 'react';
import BackIcon from '../../../assets/icons/BackIcon';
import {t} from 'react-native-tailwindcss';
interface props {
  goBack: () => void;
}
const HeaderwithBack = ({goBack}: props) => {
  const back = () => {
    console.log('back => ');
    goBack();
  };
  return (
    <TouchableOpacity
      style={[t.w8, t.roundedFull, t.mT3, t.mB3]}
      onPress={back}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default HeaderwithBack;
