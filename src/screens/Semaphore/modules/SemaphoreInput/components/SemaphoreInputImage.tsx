import React from 'react';
import SemaphoreInputImageDots from './SemaphoreInputImageDots';
import SemaphoreInputCurrentLine from './SemaphoreInputCurrentLine';
import SemaphoreInputSavedLine from './SemaphoreInputSavedLine';
import semaphoreInputStyle from '../semaphoreInput.style';
import { Svg } from '../../../../../components/Svg';
import Point from '../../../../../types/point';

type Props = {
  dots: Array<Point>,
  dotNodes: Array<any>,
  centerDotIndex: number,
  pattern: Array<Point>,
  mappedDotsIndex: Array<Point>,
  activeDotCoordinate: Point | null,
  node: SVGLineElement,
};

const SemaphoreInputImage = ({
  dots,
  dotNodes,
  centerDotIndex,
  pattern,
  mappedDotsIndex,
  activeDotCoordinate,
  node,
}: Props) => (
  <Svg style={semaphoreInputStyle.patternInput}>
    <SemaphoreInputCurrentLine
      pattern={pattern}
      mappedDotsIndex={mappedDotsIndex}
      dots={dots}
    />
    <SemaphoreInputSavedLine
      activeDotCoordinate={activeDotCoordinate}
      node={node}
    />
    <SemaphoreInputImageDots
      dots={dots}
      dotNodes={dotNodes}
      centerDotIndex={centerDotIndex}
    />
  </Svg>
);

export default SemaphoreInputImage;
