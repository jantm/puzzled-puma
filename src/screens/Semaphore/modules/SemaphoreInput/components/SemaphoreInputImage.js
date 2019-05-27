import React from 'react';
import PropTypes from 'prop-types';
import SemaphoreInputImageDots from './SemaphoreInputImageDots';
import SemaphoreInputCurrentLine from './SemaphoreInputCurrentLine';
import SemaphoreInputSavedLine from './SemaphoreInputSavedLine';
import { PATTERN_INPUT_VIEWBOX } from '../semaphoreInput.settings';
import semaphoreInputStyle from '../semaphoreInput.style';
import { Svg } from '../../../../../components/Svg';
import point from '../../../../../types/point';

const {
  arrayOf, func, number, object,
} = PropTypes;


const SemaphoreInputImage = ({
  dots, dotNodes, centerDotIndex, pattern, mappedDotsIndex, activeDotCoordinate, node,
}) => (
  <Svg style={semaphoreInputStyle.patternInput} viewbox={PATTERN_INPUT_VIEWBOX}>
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

SemaphoreInputImage.propTypes = {
  dots: arrayOf(point).isRequired,
  dotNodes: arrayOf(object).isRequired,
  centerDotIndex: number.isRequired,
  pattern: arrayOf(point).isRequired,
  mappedDotsIndex: arrayOf(point).isRequired,
  activeDotCoordinate: point,
  node: func.isRequired,
};

SemaphoreInputImage.defaultProps = {
  activeDotCoordinate: null,
};

export default SemaphoreInputImage;
