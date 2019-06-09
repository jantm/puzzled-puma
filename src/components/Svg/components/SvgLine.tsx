import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Line } from 'react-native-svg';
import Point from '../../../types/point';
import { LINECAP } from '../../../constants/svg.constants';

type Props = {
  start: Point,
  end: Point,
  strokeColor: string,
  strokeWidth: number | string,
  node?: SVGLineElement,
  lineCap?: string,
};

const SvgLine = ({
  start,
  end,
  node,
  strokeColor,
  strokeWidth,
  lineCap = LINECAP.ROUND,
}: Props) => {
  let svgLineProps = {
    x1: start.x,
    y1: start.y,
    x2: end.x,
    y2: end.y,
    stroke: strokeColor,
    strokeWidth,
    strokeLineCap: lineCap,
  };

  if (node) {
    svgLineProps = Object.assign(svgLineProps, { ref: node });
  }

  return (
    <Line {...svgLineProps} />
  );
};

export default SvgLine;
