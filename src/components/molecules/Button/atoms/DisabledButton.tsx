import React from 'react';
import {View} from 'react-native';
import Text from '../../../atom/Text';

type PropsDisabled = {
  title?: String;
  titleColor?: Object;
  style?: Object;
  children?: any;
};

const DisabledButton: React.FC<PropsDisabled> = ({
  title,
  titleColor,
  style,
  children,
}: PropsDisabled) => {
  return (
    <View style={[style]}>
      {children ? (
        children
      ) : (
        <Text size={16} type="bold" style={titleColor}>{`${title}`}</Text>
      )}
    </View>
  );
};

export default DisabledButton;
