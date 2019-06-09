import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Circle } from 'react-native-svg';
import Point from '../../../types/point';

type Props = {
  center: Point,
  radius: number,
  fillColor: string,
  strokeColor: string,
  strokeWidth: number | string,
  strokeDasharray: ReadonlyArray<number> | string,
  node?: SVGCircleElement,
};

const SvgCircle = ({
  center,
  radius,
  fillColor,
  strokeColor,
  strokeWidth,
  strokeDasharray,
}: Props) => (
  <Circle
    cx={center.x}
    cy={center.y}
    r={radius}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
  />
);

export default SvgCircle;
