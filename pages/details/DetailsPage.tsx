import {SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import WelcomeNote from './components/WelcomeNote';
import HeaderwithBack from './components/HeaderwithBack';
import {t} from 'react-native-tailwindcss';
import Capacity from './components/Capacity';
import Details from './components/details/Details';
import Animated from 'react-native-reanimated';
import {withSpehere} from '../../hoc/withSpehere';
const Detail = ({testFunction}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    testFunction(isOpen);
  }, [isOpen, testFunction]);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailsPage = withSpehere({BodyContainer: Detail});
export default DetailsPage;
