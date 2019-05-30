import React from 'react';
import { SvgLine } from '../../../../../components/Svg';
import { LINE } from '../semaphoreInput.settings';
import Point from '../../../../../types/point';

type Props = {
  activeDotCoordinate: Point | null,
  node: SVGLineElement,
};

const SemaphoreInputSavedLine = ({ activeDotCoordinate, node }: Props) => {
  if (!activeDotCoordinate) {
    return null;
  }

  return (
    <SvgLine
      node={node}
      start={activeDotCoordinate}
      end={activeDotCoordinate}
      strokeColor={LINE.COLOR}
      strokeWidth={LINE.WIDTH}
      lineCap={LINE.LINECAP}
    />
  );
};

export default SemaphoreInputSavedLine;
