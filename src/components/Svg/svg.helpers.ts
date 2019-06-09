/* eslint-disable import/prefer-default-export */
import Point from '../../types/point';

export const pointsArrayToString = (pointsArray: Array<Point>):string => (
  pointsArray.map(
    (point: Point):string => `${point.x},${point.y}`,
  )
    .join(' ')
);
