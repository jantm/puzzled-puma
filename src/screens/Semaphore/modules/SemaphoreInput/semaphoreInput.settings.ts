import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../../../style/color';
import { LINECAP } from '../../../../constants/svg.constants';

export const PATTERN_INPUT = {
  CENTER: {
    x: wp('80%') / 2,
    y: wp('80%') / 2,
  },
  RADIUS: wp('32%'),
  ANGLE_STEP: 45, // eight dots placed evenly on a circle
  ANGLE_OFFSET: -90, // start with N
  WIDTH: wp('80%'),
  HEIGHT: wp('80%'),
};

export const PATTERN_INPUT_VIEWBOX = [
  0, 0, PATTERN_INPUT.WIDTH, PATTERN_INPUT.HEIGHT,
].join(',');

export const DOTS = {
  FILL_COLOR: color.white,
  HIT_SLOP: wp('7%'),
  RADIUS: wp('5%'),
  SNAP_RADIUS: wp('5.5%'),
  SNAP_DURATION: 0,
  STROKE_WIDTH: '0.3%',
  STROKE_COLOR: color.gray,
  STROKE_DASHARRAY: '4 8',
};

export const LINE = {
  COLOR: color.conifer,
  WIDTH: 5,
  LINECAP: LINECAP.ROUND,
};

export const CENTER_DOT = Object.assign({}, DOTS, {
  HIT_SLOP: 50,
  FILL_COLOR: color.alto,
  RADIUS: wp('1.3%'),
  SNAP_RADIUS: wp('2.1%'),
  SNAP_DURATION: 50,
  STROKE_WIDTH: 0,
  STROKE_COLOR: '#fff',
  STROKE_DASHARRAY: '0',
});
