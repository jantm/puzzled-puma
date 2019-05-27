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
  menuContainer: {
    width: wp('100%'),
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingVertical: hp('2%'),
  },
  menuButtonText: {
    color: color.doveGray,
    fontSize: fontSize.base,
    fontFamily: fontFamily.sansSerif,
  },
  menuButton: {
    width: wp('50%'),
    borderWidth: 1,
    borderColor: color.silverChalice,
    borderRadius: 2,
    backgroundColor: color.white,
    paddingHorizontal: wp('2%'),
    paddingVertical: 0,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    aspectRatio: 2,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
});
