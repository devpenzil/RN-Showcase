import {View} from 'react-native';
import React from 'react';
import OverlayBubbles from '../components/OverlayBubbles';

export const withSpehere = ({BodyContainer}: {BodyContainer: any}) => {
  return () => (
    <View>
      <OverlayBubbles animeCat={1}>
        <BodyContainer />
      </OverlayBubbles>
    </View>
  );
};
