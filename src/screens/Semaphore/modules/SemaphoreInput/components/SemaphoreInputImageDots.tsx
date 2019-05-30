import React from 'react';
import { DOTS, CENTER_DOT } from '../semaphoreInput.settings';
import { SvgGroup, SvgCircle } from '../../../../../components/Svg';
import Point from '../../../../../types/point';

type Props = {
  dots: Array<Point>,
  dotNodes: Array<SVGCircleElement>,
  centerDotIndex: number,
};

const SemaphoreInputImageDots = ({
  dots,
  dotNodes,
  centerDotIndex,
}: Props) => (
  <SvgGroup>
    {dots.map(({ x, y }, i) => {
      const dotSettings = i === centerDotIndex ? CENTER_DOT : DOTS;
      const {
        RADIUS, FILL_COLOR, STROKE_COLOR, STROKE_WIDTH, STROKE_DASHARRAY,
      } = dotSettings;

      return (
        <SvgCircle
          center={{ x, y }}
          radius={RADIUS}
          fillColor={FILL_COLOR}
          strokeColor={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={STROKE_DASHARRAY}
          key={`${x}${y}`}
          node={(circle: SVGCircleElement) => { dotNodes[i] = circle; }}
        />
      );
    })}
  </SvgGroup>
);


export default SemaphoreInputImageDots;
