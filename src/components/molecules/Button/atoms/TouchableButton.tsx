import React, {useCallback, useEffect, useRef} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ColorValue,
  Easing,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../../../themes/colors';
import Text from '../../../atom/Text';
import styles from '../styles';

type PropsDisabled = {
  title?: String;
  titleColor?: Object;
  style?: Object;
  containerStyle?: Object;
  children?: any;
  withAnimation?: Boolean;
  rippleColor?: ColorValue;
  withRipple?: Boolean;
  onPress?: Function;
  isLoading?: Boolean;
  rounded: boolean;
};

const TouchableButton: React.FC<PropsDisabled> = ({
  title,
  titleColor,
  style,
  containerStyle,
  children,
  withAnimation,
  rippleColor,
  withRipple,
  onPress,
  isLoading,
  rounded,
}: PropsDisabled) => {
  const animated = useRef(new Animated.Value(1)).current,
    loadingAnimate = React.useRef(new Animated.Value(0)).current;

  const loadingAnimation = useCallback(
    (toValue: number, duration: number) => {
      Animated.timing(loadingAnimate, {
        toValue,
        duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
    },
    [loadingAnimate],
  );

  const translateX = loadingAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 5],
  });

  const tranlateXContainer = loadingAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5],
  });

  const inAnimate = (): void => {
    Animated.spring(animated, {
      toValue: 1.03,
      useNativeDriver: true,
    }).start();
  };

  const outAnimate = (): void => {
    Animated.spring(animated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Object = {
    transform: [{scale: animated}],
  };

  useEffect(() => {
    isLoading ? loadingAnimation(1, 200) : loadingAnimation(0, 200);
  }, [isLoading, loadingAnimation]);

  const Touchable: any =
    Platform.OS !== 'ios'
      ? withRipple
        ? TouchableNativeFeedback
        : TouchableOpacity
      : TouchableOpacity;

  return (
    <Touchable
      activeOpacity={0.8}
      onPress={onPress}
      delayPressIn={0}
      style={[styles.default, containerStyle]}
      useForeground={true}
      onPressIn={inAnimate}
      onPressOut={outAnimate}
      background={TouchableNativeFeedback.Ripple(
        rippleColor ? rippleColor : '#00000020',
        rounded ? rounded : true,
      )}>
      {withAnimation ? (
        <Animated.View style={[style, animatedStyle]}>
          {children ? (
            children
          ) : (
            <Animated.View
              style={[
                styles.animateTextContainer,
                {transform: [{translateX: tranlateXContainer}]},
              ]}>
              <Animated.View style={{opacity: loadingAnimate}}>
                <ActivityIndicator color={colors.white} />
              </Animated.View>
              <Text
                type="regular"
                size={14}
                style={[titleColor, {transform: [{translateX}]}]}>
                {`${title}`}
              </Text>
            </Animated.View>
          )}
        </Animated.View>
      ) : (
        <View style={style}>
          {children ? (
            children
          ) : (
            <Animated.View
              style={[
                styles.animateTextContainer,
                {transform: [{translateX: tranlateXContainer}]},
              ]}>
              <Animated.View style={{opacity: loadingAnimate}}>
                <ActivityIndicator color={colors.white} />
              </Animated.View>
              <Text
                type="bold"
                size={16}
                style={[titleColor, {transform: [{translateX}]}]}>
                {`${title}`}
              </Text>
            </Animated.View>
          )}
        </View>
      )}
    </Touchable>
  );
};

export default TouchableButton;
