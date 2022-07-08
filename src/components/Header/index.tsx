import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { useAppSelector } from '@/hooks';
import { Images } from '@/constants';
import { Date } from '@/Helpers';
import Text from '../Text';
import { Header, HeaderInfo, Icon, RefreshButton } from './styled';

interface Props {
  city: string | null;
  date: number | null;
  onPressButton: () => void | null;
}
export default ({ city, date, onPressButton }: Props) => {
  const theme = useTheme();
  const { isLoading } = useAppSelector(state => state.weather);
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);
  useEffect(() => {
    if (isLoading) {
      rotation.value = withRepeat(
        withTiming(360, {
          duration: 700,
          easing: Easing.linear,
        }),
        -1,
      );
    } else {
      cancelAnimation(rotation);
      rotation.value = 0;
    }
    return () => cancelAnimation(rotation);
  }, [rotation, isLoading]);
  return (
    <Header testID="header">
      <HeaderInfo>
        {!!date && (
          <Text size={14} weight={500} color="secondary">
            {Date.timestampToDate(date).dateInFull}
          </Text>
        )}
        <Text size={30} weight="bold">
          {city || '...'}
        </Text>
      </HeaderInfo>
      <Animated.View style={animatedStyles}>
        <RefreshButton
          style={[
            theme.layout.shadow({
              shadowColor: theme.colors.shadow,
              shadowOffset: { height: 2, width: 0 },
              shadowRadius: 4.5,
              shadowOpacity: 0.5,
            }),
            theme.layout.elevation(6),
          ]}
          onPress={onPressButton}>
          <Icon source={Images.refreshIcon} />
        </RefreshButton>
      </Animated.View>
    </Header>
  );
};
