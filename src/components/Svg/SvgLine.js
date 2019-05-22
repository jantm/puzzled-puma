import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Line } from 'react-native-svg';
import { LINECAP } from '../../constants/svg.constants';
import color from '../../style/color';
import point from '../../types/point';

const { func, number, string } = PropTypes;


const SvgLine = ({
  start, end, node, strokeColor, strokeWidth, lineCap,
}) => (
  <Line
    ref={node}
    x1={start.x}
    y1={start.y}
    x2={end.x}
    y2={end.y}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeLinecap={lineCap}
  />
);

SvgLine.propTypes = {
  start: point.isRequired,
  end: point.isRequired,
  node: func,
  strokeColor: string,
  strokeWidth: number,
  lineCap: string,
};

SvgLine.defaultProps = {
  strokeColor: color.black,
  strokeWidth: 1,
  lineCap: LINECAP.ROUND,
  node: null,
};

export default SvgLine;
