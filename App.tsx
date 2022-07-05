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
const Stack = createNativeStackNavigator();

const App = () => {
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
          </Stack.Navigator>
        </NavigationContainer>
      </PageProvider>
    </>
  );
};

export default App;
