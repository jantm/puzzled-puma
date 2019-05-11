import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import color from '../../style/color';
import { fontSize, fontFamily } from '../../style/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
