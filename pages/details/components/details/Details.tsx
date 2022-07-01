import React from 'react';
import {style} from './Details.style';
import Animated from 'react-native-reanimated';
import {OpenDetailsProps} from '../../../../types/pages';
import {View, Text, TouchableOpacity} from 'react-native';
import useDetailsPage from '../../../../hooks/useDetailsPage';

const Details = ({OpenDetails, value}: OpenDetailsProps) => {
  const {
    animateCard,
    animateCardHeaderComp,
    animateCardText,
    animatedCardValue,
    animatedDebtText,
    animatedUnverified,
  } = useDetailsPage({detailedView: value});

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
              <Animated.View>
                <Animated.View
                  style={[style.unveriifiedBox, animatedUnverified]}>
                  <Text style={style.unverifiedText}>UNVERIFIED</Text>
                </Animated.View>
                <Animated.Text style={[style.cardHeader, animateCardText]}>
                  Capacity
                </Animated.Text>
              </Animated.View>
              <Animated.View>
                <Animated.Text style={[style.cardValue, animatedCardValue]}>
                  33%
                </Animated.Text>
              </Animated.View>
            </Animated.View>
            <View style={style.measure}>
              <View style={[style.measureBlock, style.frontBlock]} />
              <View style={style.measureBlock} />
              <View style={style.measureBlock} />
              <View style={style.measureBlock} />
              <View style={[style.measureBlock, style.backBlock]} />
            </View>
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
