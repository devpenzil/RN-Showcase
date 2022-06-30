import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import WelcomeNote from './components/WelcomeNote';
import HeaderwithBack from './components/HeaderwithBack';
import {t} from 'react-native-tailwindcss';
import Capacity from './components/Capacity';
import Details from './components/details/Details';
import Animated from 'react-native-reanimated';
import {withSpehere} from '../../hoc/withSpehere';
const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SafeAreaView>
      <Animated.View style={[t.p4]}>
        {isOpen && (
          <Animated.View>
            <HeaderwithBack
              goBack={() => {
                setIsOpen(false);
              }}
            />
            <WelcomeNote />
          </Animated.View>
        )}
        <Details OpenDetails={() => setIsOpen(true)} value={isOpen} />
        {isOpen && <Capacity />}
      </Animated.View>
    </SafeAreaView>
  );
};
const DetailsPage = withSpehere({BodyContainer: Detail});
export default DetailsPage;
