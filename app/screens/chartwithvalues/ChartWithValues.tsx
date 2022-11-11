import {Text, SafeAreaView, FlatList, View, Pressable} from 'react-native';
import React from 'react';
import {style} from './style';
import Animated from 'react-native-reanimated';

const ChartWithValues = () => {
  const data = [
    {value: 87, status: true},
    {value: 64, status: false},
    {value: 82, status: false},
    {value: 22, status: false},
    {value: 39, status: false},
    {value: 84, status: false},
    {value: 25, status: false},
    {value: 40, status: false},
    {value: 65, status: false},
    {value: 33, status: false},
    {value: 97, status: false},
    {value: 66, status: false},
  ];
  return (
    <SafeAreaView>
      <Animated.FlatList
        contentContainerStyle={style.chartCOntainer}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={50}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={style.chartText}>{item.value}</Text>
              <Pressable
                style={[
                  {height: item.value * 3},
                  style.chartblock,
                  item.status && {opacity: 1},
                ]}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ChartWithValues;
