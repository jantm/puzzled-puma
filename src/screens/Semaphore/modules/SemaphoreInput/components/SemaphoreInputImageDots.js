import React from 'react';
import PropTypes from 'prop-types';
import { DOTS, CENTER_DOT } from '../semaphoreInput.settings';
import { SvgGroup, SvgCircle } from '../../../../../components/Svg';
import point from '../../../../../types/point';

const { arrayOf, number, object } = PropTypes;


const SemaphoreInputImageDots = ({ dots, dotNodes, centerDotIndex }) => (
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
          node={(circle) => { dotNodes[i] = circle; }}
        />
      );
    })}
  </SvgGroup>
);

SemaphoreInputImageDots.propTypes = {
  dots: arrayOf(point).isRequired,
  dotNodes: arrayOf(object).isRequired,
  centerDotIndex: number.isRequired,
};

export default SemaphoreInputImageDots;
