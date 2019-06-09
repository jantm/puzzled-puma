import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Polyline } from 'react-native-svg';
import Point from '../../../types/point';
import { LINECAP, FILL } from '../../../constants/svg.constants';
import { pointsArrayToString } from '../svg.helpers';

type Props = {
  points: Array<Point>,
  strokeColor: string,
  strokeWidth: number | string,
  fill?: string,
  node?: SVGPolylineElement,
  lineCap?: string,
};

const SvgPolyline = ({
  points,
  node,
  strokeColor,
  strokeWidth,
  fill = FILL.NONE,
  lineCap = LINECAP.ROUND,
}: Props) => {
  let svgPolylineProps = {
    points: pointsArrayToString(points),
    fill,
    stroke: strokeColor,
    strokeWidth,
    strokeLineCap: lineCap,
  };

  if (node) {
    svgPolylineProps = Object.assign(svgPolylineProps, { ref: node });
  }

  return (
    <Polyline {...svgPolylineProps} />
  );
};

export default SvgPolyline;
