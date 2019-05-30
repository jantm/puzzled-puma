import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Line } from 'react-native-svg';
import Point from '../../types/point';

type Props = {
  start: Point,
  end: Point,
  node?: SVGLineElement,
  strokeColor: string,
  strokeWidth: number | string,
  lineCap: string,
};

const SvgLine = ({
  start,
  end,
  node,
  strokeColor,
  strokeWidth,
  lineCap,
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
