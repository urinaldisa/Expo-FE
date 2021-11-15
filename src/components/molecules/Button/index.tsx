import React, {Fragment, memo} from 'react';
import {ColorValue} from 'react-native';
import {colors} from '../../../themes/colors';
import {DisabledButton, TouchableButton} from './atoms/';
import styles from './styles';

type PropsButton = {
  title?: String;
  type?: 'danger' | 'light' | 'success' | 'warning' | 'none';
  disabled?: Boolean;
  style?: Object;
  containerStyle?: Object;
  withRipple?: Boolean;
  children?: any;
  rippleColor?: ColorValue;
  withAnimation?: Boolean;
  onPress?: Function;
  isLoading?: Boolean;
  rounded: boolean;
};

const CustomButton: React.FC<PropsButton> = memo(
  ({
    title,
    withRipple,
    rippleColor,
    withAnimation,
    disabled,
    type,
    style,
    containerStyle,
    children,
    onPress,
    rounded,
    isLoading,
  }: PropsButton) => {
    const types: Object | Boolean[] = [
      type === 'danger' && {...styles.dark, backgroundColor: colors.danger},
      type === 'light' && {...styles.light, backgroundColor: colors.light},
      type === 'warning' && {...styles.light, backgroundColor: colors.warning},
      type === 'success' && {
        ...styles.success,
        backgroundColor: colors.success,
      },
      type === 'none' && {},
      disabled && styles.disabled,
    ];

    const textColor: Object | Boolean[] = [
      type === 'danger' && {...styles.textDark, color: colors.white},
      type === 'light' && {...styles.textDark, color: colors.dark},
      type === 'warning' && {...styles.textDark, color: colors.white},
      type === 'success' && {...styles.textDark, color: colors.white},
      type === 'none' && {},
      disabled && styles.textDark,
    ];

    return (
      <Fragment>
        {disabled ? (
          <DisabledButton
            title={title}
            titleColor={textColor}
            style={[types, style]}
          />
        ) : (
          <TouchableButton
            rounded={rounded}
            onPress={onPress}
            withRipple={withRipple}
            title={title}
            isLoading={isLoading}
            titleColor={textColor}
            style={[types, style]}
            containerStyle={containerStyle}
            rippleColor={rippleColor}
            withAnimation={withAnimation}>
            {children}
          </TouchableButton>
        )}
      </Fragment>
    );
  },
);

export default CustomButton;

CustomButton.defaultProps = {
  withAnimation: true,
  withRipple: true,
};
