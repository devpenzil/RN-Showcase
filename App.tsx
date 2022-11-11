import React from 'react';
import Home from './app/screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTEENUM} from './app/types/routes';
import ChartWithValues from './app/screens/chartwithvalues/ChartWithValues';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTEENUM.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTEENUM.HOME} component={Home} />
        <Stack.Screen
          name={ROUTEENUM.CHARTWITHVALUES}
          component={ChartWithValues}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
