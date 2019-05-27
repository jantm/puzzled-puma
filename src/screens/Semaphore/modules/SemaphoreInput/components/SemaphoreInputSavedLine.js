import React from 'react';
import PropTypes from 'prop-types';
import { SvgLine } from '../../../../../components/Svg';
import { LINE } from '../semaphoreInput.settings';
import point from '../../../../../types/point';


const SemaphoreInputSavedLine = ({ activeDotCoordinate, node }) => {
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

SemaphoreInputSavedLine.propTypes = {
  activeDotCoordinate: point,
  node: PropTypes.func.isRequired,
};

SemaphoreInputSavedLine.defaultProps = {
  activeDotCoordinate: null,
};

export default SemaphoreInputSavedLine;
