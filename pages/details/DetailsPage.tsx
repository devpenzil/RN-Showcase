import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import WelcomeNote from './components/WelcomeNote';
import HeaderwithBack from './components/HeaderwithBack';
import {t} from 'react-native-tailwindcss';
import Capacity from './components/Capacity';
import Details from './components/details/Details';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
const DetailsPage = () => {
  const detailedView = useSharedValue(false);
  useEffect(() => {
    // setTimeout(() => {
    //   detailedView.value = true;
    // }, 3000);
  }, [detailedView]);
  const animeSTyle = useAnimatedStyle(() => {
    return {
      width: detailedView.value ? '100%' : '33%',
    };
  });
  return (
    <SafeAreaView>
      <Animated.View style={[t.p4]}>
        {detailedView.value && (
          <Animated.View>
            <HeaderwithBack
              goBack={() => {
                detailedView.value = false;
              }}
            />
            <WelcomeNote />
          </Animated.View>
        )}
        <Details
          detailsOpen={detailedView}
          showDetails={() => {
            detailedView.value = true;
          }}
          styles={animeSTyle}
        />
        {detailedView.value && <Capacity />}
      </Animated.View>
    </SafeAreaView>
  );
};

export default DetailsPage;
