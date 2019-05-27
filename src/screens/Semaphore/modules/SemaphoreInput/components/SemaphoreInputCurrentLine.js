import React from 'react';
import PropTypes from 'prop-types';
import { SvgGroup, SvgLine } from '../../../../../components/Svg';
import { LINE } from '../semaphoreInput.settings';
import { getLineKey } from '../semaphoreInput.helpers';
import point from '../../../../../types/point';

const { arrayOf } = PropTypes;


const SemaphoreInputCurrentLine = ({ pattern, mappedDotsIndex, dots }) => (
  <SvgGroup>
    {pattern.map((startCoordinate, index) => {
      if (index === pattern.length - 1) {
        return null;
      }

      const startIndex = mappedDotsIndex.findIndex(dot => (
        dot.x === startCoordinate.x && dot.y === startCoordinate.y
      ));
      const endCoordinate = pattern[index + 1];
      const endIndex = mappedDotsIndex.findIndex(dot => (
        dot.x === endCoordinate.x && dot.y === endCoordinate.y
      ));

      if (startIndex < 0 || endIndex < 0) {
        return null;
      }

      const actualStartDot = dots[startIndex];
      const actualEndDot = dots[endIndex];
      const key = getLineKey(actualStartDot, actualEndDot, 'fixedLine');

      return (
        <SvgLine
          start={actualStartDot}
          end={actualEndDot}
          key={key}
          strokeColor={LINE.COLOR}
          strokeWidth={LINE.WIDTH}
          lineCap={LINE.LINECAP}
        />
      );
    })}
  </SvgGroup>
);

SemaphoreInputCurrentLine.propTypes = {
  pattern: arrayOf(point).isRequired,
  mappedDotsIndex: arrayOf(point).isRequired,
  dots: arrayOf(point).isRequired,
};

export default SemaphoreInputCurrentLine;
