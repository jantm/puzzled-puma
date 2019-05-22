import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Circle } from 'react-native-svg';
import color from '../../style/color';
import point from '../../types/point';

const {
  func, number, oneOfType, string,
} = PropTypes;


const SvgCircle = ({
  center, radius, fillColor, strokeColor, strokeWidth, strokeDasharray, node,
}) => (
  <Circle
    ref={node}
    cx={center.x}
    cy={center.y}
    r={radius}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
  />
);

SvgCircle.propTypes = {
  center: point.isRequired,
  radius: number.isRequired,
  fillColor: string,
  strokeColor: string,
  strokeWidth: oneOfType([
    number,
    string,
  ]),
  strokeDasharray: oneOfType([
    number,
    string,
  ]),
  node: func.isRequired,
};

SvgCircle.defaultProps = {
  fillColor: color.white,
  strokeColor: color.black,
  strokeWidth: 1,
  strokeDasharray: 'none',
};

export default SvgCircle;
