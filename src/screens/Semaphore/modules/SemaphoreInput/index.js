import React from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder } from 'react-native';
import {
  getDotIndex, getDotsOnCircle, isDotInPattern, populateDotsCoordinate, snapDot,
} from './semaphoreInput.helpers';
import semaphoreInputStyle from './semaphoreInput.style';
import { getArrayWithoutItem } from '../../../../utils/array';
import SemaphoreInputImage from './components/SemaphoreInputImage';
import { DOTS, PATTERN_INPUT, CENTER_DOT } from './semaphoreInput.settings';

const getInitialState = () => ({
  initialGestureCoordinate: null,
  activeDotCoordinate: null,
  pattern: [],
  indexPattern: [],
  showError: false,
  step: 0,
});


export default class SemaphorePatternInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = getInitialState();

    const {
      CENTER, RADIUS, ANGLE_STEP, ANGLE_OFFSET, WIDTH, HEIGHT,
    } = PATTERN_INPUT;
    this.dots = getDotsOnCircle(CENTER, RADIUS, ANGLE_STEP, ANGLE_OFFSET);

    this.dots.push(CENTER);

    this.centerDotIndex = this.dots.length - 1;

    this.mappedDotsIndex = populateDotsCoordinate(3, WIDTH, HEIGHT);
    this.dotNodes = [];


    this.snapAnimatedValues = this.dots.map((dot, index) => {
      const animatedValue = new Animated.Value(DOTS.RADIUS);

      animatedValue.addListener(({ value }) => {
        const dotNode = this.dotNodes[index];
        if (dotNode) {
          dotNode.setNativeProps({ r: value.toString() });
        }
      });

      return animatedValue;
    });


    const defFuncTrue = () => true;

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: defFuncTrue,
      onStartShouldSetPanResponderCapture: defFuncTrue,
      onMoveShouldSetPanResponder: defFuncTrue,
      onMoveShouldSetPanResponderCapture: defFuncTrue,

      onPanResponderGrant: (e) => {
        const { locationX, locationY } = e.nativeEvent;
        const { step } = this.state;

        let patternState = {
          activeDotCoordinate: null,
          initialGestureCoordinate: null,
          pattern: [],
          indexPattern: [],
        };

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
          patternState = {
            activeDotCoordinate,
            initialGestureCoordinate: activeDotCoordinate,
            pattern: [firstDot],
            indexPattern: [activeDotIndex],
            step: step + 1,
          };
        }
        this.setState(patternState);
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

          const animateIndexes = [matchedDotIndex];

          this.setState({
            pattern,
            indexPattern,
            activeDotCoordinate: this.dots[matchedDotIndex],
            step: step + 1,
          },
          () => {
            if (animateIndexes.length) {
              animateIndexes.forEach((index) => {
                const config = index === this.centerDotIndex ? CENTER_DOT : DOTS;
                snapDot(this.snapAnimatedValues[index], config);
              });
            }
          });
        } else if (this.activeLine) {
          this.activeLine.setNativeProps({
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

  allowedInThisStep(dotIndex) {
    const isCenterDot = dotIndex === this.centerDotIndex;
    const { step } = this.state;

    return (step === 1 && isCenterDot)
      || (step === 2 && !isCenterDot);
  }

  resetState(onResolve) {
    this.setState(getInitialState(), onResolve);
  }

  patternComplete() {
    const { indexPattern } = this.state;
    const { onPattern } = this.props;
    const patternWithoutCenter = getArrayWithoutItem(indexPattern, this.centerDotIndex);

    this.resetState(() => onPattern(patternWithoutCenter));
  }

  renderPatternImage(node) {
    const {
      initialGestureCoordinate,
      pattern,
      showError,
      activeDotCoordinate,
    } = this.state;

    const patternImageParams = {
      dots: this.dots,
      dotNodes: this.dotNodes,
      centerDotIndex: this.centerDotIndex,
      initialGestureCoordinate,
      pattern,
      showError,
      activeDotCoordinate,
      mappedDotsIndex: this.mappedDotsIndex,
      activeLine: this.activeLine,
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
        {this.renderPatternImage((node) => { this.activeLine = node; })}
      </Animated.View>
    );
  }
}

SemaphorePatternInput.propTypes = {
  onPattern: PropTypes.func.isRequired,
};
