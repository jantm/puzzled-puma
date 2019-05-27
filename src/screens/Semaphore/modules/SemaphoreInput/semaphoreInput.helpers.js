import { Animated } from 'react-native';
import { DOTS } from './semaphoreInput.settings';
import { deg2rad } from '../../../../utils/math';


// Get coordinates of dots plced on a circle, based on the circle's center,
// radius and angle step that defines the dot placement
export const getDotsOnCircle = (center, radius, angleStep, angleOffset) => {
  const { cos, round, sin } = Math;
  const offsetRad = deg2rad(angleOffset);
  const dots = [];

  for (let angle = 0, angleRad; angle < 360; angle += angleStep) {
    angleRad = deg2rad(angle) + offsetRad;
    dots.push({
      x: round(center.x + radius * cos(angleRad)),
      y: round(center.y + radius * sin(angleRad)),
    });
  }

  return dots;
};


const isWithinSlop = (coords, targetCoords, hitSlop) => {
  const withinX = (coords.x + hitSlop >= targetCoords.x)
               && (coords.x - hitSlop <= targetCoords.x);
  const withinY = (coords.y + hitSlop >= targetCoords.y)
               && (coords.y - hitSlop <= targetCoords.y);

  return withinX && withinY;
};

export const getDotIndex = (gestureCoordinate, dots, hitSlop = DOTS.HIT_SLOP) => {
  let dotIndex;

  for (let i = 0; i < dots.length; i += 1) {
    if (isWithinSlop(dots[i], gestureCoordinate, hitSlop)) {
      dotIndex = i;
      break;
    }
  }

  return dotIndex;
};


export const populateDotsCoordinate = (dotsDimension) => {
  const mappedIndex = [];

  for (let rowIndex = 0; rowIndex < dotsDimension; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < dotsDimension; columnIndex += 1) {
      mappedIndex.push({ x: columnIndex, y: rowIndex });
    }
  }

  return mappedIndex;
};


export const getPointKey = (point, defaultKey = 'point') => {
  let key = defaultKey;

  if (typeof point.x !== 'undefined'
   && typeof point.y !== 'undefined') {
    key += point.x + point.y;
  }

  return key;
};

export const getLineKey = (start, end, defaultKey = 'line') => {
  let key = defaultKey;

  key += getPointKey(start, '');
  key += getPointKey(end, '');

  return key;
};

export const snapDot = (animatedValue: Animated.Value, dotConfig) => {
  const { SNAP_RADIUS, SNAP_DURATION, RADIUS } = dotConfig;

  Animated.sequence([
    Animated.timing(animatedValue, {
      toValue: SNAP_RADIUS,
      duration: SNAP_DURATION,
    }),
    Animated.timing(animatedValue, {
      toValue: RADIUS,
      duration: SNAP_DURATION,
    }),
  ]).start();
};

export const isDotInPattern = ({ x, y }, pattern) => (
  !!pattern.find(dot => (dot.x === x && dot.y === y))
);
