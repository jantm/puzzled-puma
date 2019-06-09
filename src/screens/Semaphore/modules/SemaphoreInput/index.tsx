import React from 'react';
import { Animated, PanResponder, PanResponderInstance } from 'react-native';
import {
  getDotIndex, getDotsOnCircle, isDotInPattern, populateDotsCoordinate,
} from './semaphoreInput.helpers';
import semaphoreInputStyle from './semaphoreInput.style';
import { getArrayWithoutItem } from '../../../../utils/array';
import SemaphoreInputImage from './components/SemaphoreInputImage';
import { PATTERN_INPUT } from './semaphoreInput.settings';
import EventFunction from '../../../../types/eventFunction';
import SetStateCallback from '../../../../types/setStateCallback';
import Point from '../../../../types/point';

const {
  CENTER, RADIUS, ANGLE_STEP, ANGLE_OFFSET,
} = PATTERN_INPUT;

const getInitialState = () => ({
  initialGestureCoordinate: null,
  activeDotCoordinate: null,
  pattern: [] as Array<Point>,
  indexPattern: [] as Array<number>,
  step: 0,
});

type Props = {
  onPattern: EventFunction,
};
type State = {
  initialGestureCoordinate: Point | null,
  activeDotCoordinate: Point | null,
  pattern: Array<Point>,
  indexPattern: Array<number>,
  step: number,
};

export default class SemaphorePatternInput extends React.Component<Props, State> {
  state: Readonly<State> = getInitialState();

  dots: Array<Point>;

  centerDotIndex: number;

  mappedDotsIndex: Array<Point>;

  dotNodes: Array<SVGCircleElement>;

  panResponder: PanResponderInstance;

  activeLine!: any;


  constructor(props: Props) {
    super(props);

    this.state = getInitialState();

    this.dots = getDotsOnCircle(CENTER, RADIUS, ANGLE_STEP, ANGLE_OFFSET);

    this.dots.push(CENTER);

    this.centerDotIndex = this.dots.length - 1;

    this.mappedDotsIndex = populateDotsCoordinate(3);
    this.dotNodes = [];

    const defFuncTrue = () => true;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: defFuncTrue,
      onStartShouldSetPanResponderCapture: defFuncTrue,
      onMoveShouldSetPanResponder: defFuncTrue,
      onMoveShouldSetPanResponderCapture: defFuncTrue,

      onPanResponderGrant: e => {
        const { locationX, locationY } = e.nativeEvent;
        const { step } = this.state;

        const activeDotIndex = getDotIndex(
          { x: locationX, y: locationY },
          this.dots,
        );

        if (step === 0 && activeDotIndex === this.centerDotIndex) {
          return;
        }

        if (activeDotIndex != null) {
          const activeDotCoordinate = this.dots[activeDotIndex];
          const firstDot = this.mappedDotsIndex[activeDotIndex];

          const patternState = {
            initialGestureCoordinate: activeDotCoordinate,
            activeDotCoordinate,
            pattern: [firstDot],
            indexPattern: [activeDotIndex],
            step: step + 1,
          };

          this.setState(patternState);
        }
      },

      onPanResponderMove: (e, gestureState) => {
        const { dx, dy } = gestureState;
        const {
          initialGestureCoordinate,
          activeDotCoordinate,
          pattern,
          indexPattern,
          step,
        } = this.state;

        if (step > 2) {
          return;
        }

        if (activeDotCoordinate === null
          || initialGestureCoordinate === null) {
          return;
        }

        const endGestureX = initialGestureCoordinate.x + dx;
        const endGestureY = initialGestureCoordinate.y + dy;
        const matchedDotIndex = getDotIndex(
          { x: endGestureX, y: endGestureY },
          this.dots,
        );
        const matchedDot = matchedDotIndex != null && this.mappedDotsIndex[matchedDotIndex];

        if (
          matchedDotIndex != null
          && matchedDot
          && !isDotInPattern(matchedDot, pattern)
          && this.allowedInThisStep(matchedDotIndex)
        ) {
          const newMatch = { x: matchedDot.x, y: matchedDot.y };

          pattern.push(newMatch);
          indexPattern.push(matchedDotIndex);

          this.setState({
            pattern,
            indexPattern,
            activeDotCoordinate: this.dots[matchedDotIndex],
            step: step + 1,
          });
        } else if (this.activeLine!) {
          this.activeLine!.setNativeProps({
            x2: endGestureX.toString(),
            y2: endGestureY.toString(),
          });
        }
      },

      onPanResponderRelease: () => {
        const { step } = this.state;

        if (step > 2) {
          this.patternComplete();
        } else {
          this.resetState();
        }
      },
    });
  }

  allowedInThisStep(dotIndex: number) {
    const isCenterDot = dotIndex === this.centerDotIndex;
    const { step } = this.state;

    return (step === 1 && isCenterDot)
      || (step === 2 && !isCenterDot);
  }

  resetState(onResolve?: SetStateCallback) {
    this.setState(getInitialState(), onResolve);
  }

  patternComplete() {
    const { indexPattern } = this.state;
    const { onPattern } = this.props;
    const patternWithoutCenter = getArrayWithoutItem(indexPattern, this.centerDotIndex);

    this.resetState(() => onPattern(patternWithoutCenter));
  }

  renderPatternImage(node: any) {
    const {
      pattern,
      activeDotCoordinate,
    } = this.state;

    const patternImageParams = {
      dots: this.dots,
      dotNodes: this.dotNodes,
      centerDotIndex: this.centerDotIndex,
      pattern,
      activeDotCoordinate,
      mappedDotsIndex: this.mappedDotsIndex,
      node,
    };

    return (
      <SemaphoreInputImage {...patternImageParams} />
    );
  }

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={semaphoreInputStyle.patternInputContainer}
      >
        {this.renderPatternImage((node: any) => { this.activeLine! = node; })}
      </Animated.View>
    );
  }
}
