import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import Animated from 'react-native-reanimated';
import React from 'react';

const BG_IMG =
  'https://images.unsplash.com/photo-1621193677201-096db5e45734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsdWlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60';

const ITEM_SIZE = 80;
const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const scrollY = React.useRef(new Animated.Value()).current;

  return (
    <SafeAreaView>
      <Image source={{uri: BG_IMG}} style={style.imgbg} blurRadius={20} />
      <Animated.FlatList
        data={data}
        style={{padding: 10}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opcaityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opcaityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <>
              <Animated.View
                style={(style.cardArea, {transform: [{scale}], opacity})}>
                <Pressable style={style.card}>
                  <Text>Hello world</Text>
                </Pressable>
              </Animated.View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
const style = StyleSheet.create({
  cardArea: {
    width: '100%',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    borderRadius: 6,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginBottom: 20,
  },
  imgbg: {
    width: '100%',
    height: Dimensions.get('screen').height,
    position: 'absolute',
  },
});
