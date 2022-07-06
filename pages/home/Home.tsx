import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {routes} from '../../types/pageEnums';
import {useNavigation} from '@react-navigation/native';
interface RouteInterface {
  name: string;
}
const Home = () => {
  const navigation = useNavigation();
  const data: RouteInterface[] = [
    {name: routes.DASHBOARD},
    {name: routes.LOTTIE},
    {name: routes.SPLASH},
    {name: routes.MODALDEMO},
    {name: routes.CUSTOMFONT},
  ];
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item}: {item: RouteInterface}) => {
          return (
            <TouchableOpacity
              style={styles.touchableHandle}
              onPress={() => {
                navigation.navigate(item.name);
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  touchableHandle: {
    backgroundColor: '#00ff0070',
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
