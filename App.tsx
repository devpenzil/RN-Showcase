import React from 'react';
import DetailsPage from './pages/details/DetailsPage';
import LottiePage from './pages/lottie-animations/LottiePage';
import Splash from './pages/splash/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home/Home';
import {routes} from './types/pageEnums';
import ModalDemo from './pages/modalDemo/ModalDemo';
import {Provider as PageProvider} from 'react-native-paper';
import CustomFont from './pages/customFont/CustomFont';
import Touch from './pages/touch/Touch';
import Storage from './pages/storage/Storage';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {storage} from './storage/mmkvStorage';
const Stack = createNativeStackNavigator();

const App = () => {
  if (__DEV__) {
    initializeMMKVFlipper({default: storage});
  }
  return (
    <>
      <PageProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="home">
            <Stack.Screen name={routes.HOME} component={Home} />
            <Stack.Screen name={routes.DASHBOARD} component={DetailsPage} />
            <Stack.Screen name={routes.LOTTIE} component={LottiePage} />
            <Stack.Screen name={routes.SPLASH} component={Splash} />
            <Stack.Screen name={routes.MODALDEMO} component={ModalDemo} />
            <Stack.Screen name={routes.CUSTOMFONT} component={CustomFont} />
            <Stack.Screen name={routes.TOUCH} component={Touch} />
            <Stack.Screen name={routes.STORAGE} component={Storage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PageProvider>
    </>
  );
};

export default App;
