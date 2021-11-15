import React, {FC} from 'react';
import {View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

type PropsGap = {
  width?: number;
  height?: number;
};

const Gap: FC<PropsGap> = ({width, height}: PropsGap) => {
  return (
    <View
      style={{
        width: widthPercentageToDP(width || 0),
        height: heightPercentageToDP(height || 0),
      }}
    />
  );
};

export default Gap;
