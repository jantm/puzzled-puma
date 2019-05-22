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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    paddingVertical: hp('5%'),
  },
  textContainer: {
    width: wp('90%'),
    aspectRatio: 6,
    justifyContent: 'center',
  },
  text: {
    color: color.black,
    borderWidth: 1,
    borderColor: color.alto,
    backgroundColor: color.white,
    padding: '3%',
    fontFamily: fontFamily.monospace,
    letterSpacing: 2,
  },
  controlsContainer: {
    width: wp('100%'),
    aspectRatio: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controlButton: {
    width: wp('20%'),
    aspectRatio: 1,
    borderColor: color.alto,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.02,
    shadowRadius: 15,
  },
  controlButtonText: {
    color: color.gray,
    fontFamily: fontFamily.sansSerif,
    fontSize: fontSize.base,
  },
});
