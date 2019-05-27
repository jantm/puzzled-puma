import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import color from '../../style/color';
import { fontSize, fontFamily } from '../../style/typography';

const controlsContainerHeight = hp('25%');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    paddingVertical: hp('5%'),
  },
  controlsContainer: {
    width: '100%',
    height: controlsContainerHeight,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  controlsRow: {
    width: '100%',
    height: controlsContainerHeight / 2,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controlButton: {
    width: wp('18%'),
    aspectRatio: 1,
    borderColor: color.alto,
    borderWidth: 1,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
  },
  inputButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('7%'),
    width: wp('30%'),
  },
  symbolStyle: {
    backgroundColor: color.black,
    borderRadius: hp('1.75%'),
    height: hp('3.5%'),
  },
  dotSymbol: {
    aspectRatio: 1,
  },
  dashSymbol: {
    aspectRatio: 3,
  },
  output: {
    width: '80%',
    aspectRatio: 7,
    color: color.black,
    borderWidth: 1,
    borderColor: color.alto,
    backgroundColor: color.white,
    padding: '3%',
    fontFamily: fontFamily.monospace,
    letterSpacing: 2,
  },
  currentInputContainer: {
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  currentMorse: {
    width: '45%',
    height: '100%',
    fontSize: fontSize.xxxl,
    fontFamily: fontFamily.sansSerif,
    letterSpacing: 4,
    textAlign: 'center',
  },
  currentLetter: {
    width: '15%',
    height: '100%',
    fontSize: fontSize.xxxl,
    fontFamily: fontFamily.sansSerif,
    color: color.silverChalice,
    backgroundColor: color.alabaster,
  },
});
