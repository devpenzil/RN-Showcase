import {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const useDetailsPage = ({detailedView}: {detailedView: boolean}) => {
  const isOpen = useDerivedValue(() => {
    const x = detailedView;
    return x;
  });

  const animateCard = useAnimatedStyle(() => {
    return {
      width: withTiming(isOpen.value ? '100%' : '30%', {
        duration: 500,
      }),
      shadowOpacity: isOpen.value ? 0 : 0.1,
      backgroundColor: isOpen.value ? 'transparent' : 'white',
    };
  });
  const animatedDebtText = useAnimatedStyle(() => {
    return {
      display: isOpen.value ? 'flex' : 'none',
      paddingHorizontal: 20,
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
    };
  });
  const animateCardHeaderComp = useAnimatedStyle(() => {
    return {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    };
  });
  const animatedUnverified = useAnimatedStyle(() => {
    return {
      display: isOpen.value ? 'flex' : 'none',
    };
  });
  const animateCardText = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(isOpen.value ? 26 : 16, {
        duration: 500,
      }),
    };
  });
  const animatedCardValue = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(isOpen.value ? 50 : 22, {
        duration: 500,
      }),
    };
  });
  const animations = {
    animateCard,
    animatedDebtText,
    animateCardHeaderComp,
    animatedUnverified,
    animateCardText,
    animatedCardValue,
  };
  return animations;
};
export default useDetailsPage;
