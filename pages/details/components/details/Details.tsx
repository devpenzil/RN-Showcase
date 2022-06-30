import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Details.style';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
interface OpenDetailsProps {
  OpenDetails: () => void;
  value: boolean;
}
const Details = ({OpenDetails, value}: OpenDetailsProps) => {
  const detailedView = useDerivedValue(() => {
    const x = value;
    return x;
  });
  console.log({detailedView});

  const animateCard = useAnimatedStyle(() => {
    return {
      width: withTiming(detailedView.value ? '100%' : '30%', {
        duration: 500,
      }),
      shadowOpacity: detailedView.value ? 0 : 0.1,
    };
  });
  const animateCardHeaderComp = useAnimatedStyle(() => {
    return {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    };
  });
  const animatedDebtText = useAnimatedStyle(() => {
    return {
      display: detailedView.value ? 'flex' : 'none',
      paddingHorizontal: 20,
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
    };
  });
  const animateCardText = useAnimatedStyle(() => {
    return {
      fontSize: detailedView.value ? 22 : 16,
    };
  });
  const animatedCardValue = useAnimatedStyle(() => {
    return {
      fontSize: detailedView.value ? 50 : 22,
    };
  });
  return (
    <>
      <View style={style.container}>
        {/* ========= card one ========== */}
        <Animated.View style={[style.card, animateCard]}>
          <TouchableOpacity
            onPress={() => {
              OpenDetails();
            }}>
            <Animated.View
              style={[style.cardHeaderComp, animateCardHeaderComp]}>
              <View>
                <Animated.Text style={[style.cardHeader, animateCardText]}>
                  Capacity
                </Animated.Text>
              </View>
              <Animated.Text style={[style.cardValue, animatedCardValue]}>
                33%
              </Animated.Text>
            </Animated.View>
            <Animated.View style={style.measure}>
              <View
                style={[
                  style.measureBlock,
                  {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
                ]}
              />
              <View style={style.measureBlock} />
              <View style={style.measureBlock} />
              <View style={style.measureBlock} />
              <View
                style={[
                  style.measureBlock,
                  {borderTopRightRadius: 10, borderBottomRightRadius: 10},
                ]}
              />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Animated.Text style={[animatedDebtText]}>
        The number represents your remaining income after debt
      </Animated.Text>
    </>
  );
};

export default Details;
