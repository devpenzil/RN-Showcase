import {View} from 'react-native';
import React, {useState} from 'react';
import OverlayBubbles from '../components/OverlayBubbles';

export const withSpehere = ({BodyContainer}: {BodyContainer: any}) => {
  return () => {
    const [cat, setCat] = useState<any>(2);
    const newTestFn = (val: any) => {
      setCat(val ? 1 : 2);
    };
    return (
      <View>
        <OverlayBubbles animeCat={cat}>
          <BodyContainer testFunction={newTestFn} />
        </OverlayBubbles>
      </View>
    );
  };
};
