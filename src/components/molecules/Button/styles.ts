import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../../themes/colors';
import {sizes} from '../../../themes/sizes';

const styles = StyleSheet.create({
  default: {
    overflow: 'hidden',
  },
  primary: {
    backgroundColor: colors.primary,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusSmall,
    overflow: 'hidden',
  },
  dark: {
    backgroundColor: colors.danger,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusSmall,
    overflow: 'hidden',
  },
  success: {
    backgroundColor: colors.success,
    height: heightPercentageToDP(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusSmall,
    overflow: 'hidden',
  },
  light: {
    backgroundColor: colors.primary + 30,
    height: heightPercentageToDP(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radiusSmall,
    overflow: 'hidden',
  },
  disabled: {
    backgroundColor: colors.primary + 30,
    height: heightPercentageToDP(6),
    borderRadius: sizes.radiusSmall,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDark: {
    fontWeight: '700',
    lineHeight: 21.79,
  },
  textWhite: {
    color: colors.white,
    fontWeight: '700',
    lineHeight: 21.79,
  },
  animateTextContainer: {
    flexDirection: 'row',
  },
});

export default styles;
