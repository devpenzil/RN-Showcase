import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Details.style';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
interface DetailsInterfaceProps {
  detailsOpen: {
    value: boolean;
  };
  showDetails: () => void;
  styles: {};
}
const Details = ({detailsOpen, showDetails, styles}: DetailsInterfaceProps) => {
  const isVisible = useDerivedValue(() => {
    return detailsOpen.value;
  });
  console.log({isVisible});

  const cardAnimeStyle = useAnimatedStyle(() => {
    return {
      width: isVisible ? '100%' : '33%',
    };
  });
  return (
    <View style={style.container}>
      <View style={style.cardView}>
        <Animated.View style={styles}>
          <TouchableOpacity style={style.card} onPress={showDetails}>
            <View>
              <Text style={style.cardHead}>Capacity</Text>
              <Text style={style.cardPercent}>38 %</Text>
            </View>
            <View style={style.measure}>
              <View style={[style.measureBlock, style.active]} />
              <View style={[style.measureBlock, style.active]} />
              <View style={[style.measureBlock, style.active]} />
              <View style={style.measureBlock} />
              <View style={style.measureBlock} />
            </View>
          </TouchableOpacity>
        </Animated.View>
        {!detailsOpen && (
          <>
            <View style={[cardAnimeStyle]}>
              <View style={style.card}>
                <Text style={style.cardHead}>Charecter</Text>
                <Text style={style.cardPercent}>350</Text>
                <View style={style.measure}>
                  <View style={[style.measureBlock, style.active]} />
                  <View style={[style.measureBlock, style.active]} />
                  <View style={[style.measureBlock, style.active]} />
                  <View style={style.measureBlock} />
                  <View style={style.measureBlock} />
                </View>
              </View>
            </View>
            <View style={cardAnimeStyle}>
              <View style={style.card}>
                <Text style={style.cardHead}>Capital</Text>
                <Text style={style.cardPercent}>$ 350k</Text>
                <View style={style.measure}>
                  <View style={[style.measureBlock, style.active]} />
                  <View style={[style.measureBlock, style.active]} />
                  <View style={[style.measureBlock, style.active]} />
                  <View style={style.measureBlock} />
                  <View style={style.measureBlock} />
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Details;
