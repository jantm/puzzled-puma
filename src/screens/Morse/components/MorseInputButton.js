import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import morseStyle from '../morse.style';
import { INPUT_BUTTONS } from '../morse.constants';

const { DASH, DOT } = INPUT_BUTTONS;

const MorseInputButton = ({ onPress, type }) => {
  const symbolStyle = [morseStyle.symbolStyle];

  switch (type) {
    case DOT:
      symbolStyle.push(morseStyle.dotSymbol);
      break;
    case DASH:
      symbolStyle.push(morseStyle.dashSymbol);
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      style={morseStyle.inputButton}
      onPress={onPress}
    >
      <Image style={symbolStyle} />
    </TouchableOpacity>
  );
};

MorseInputButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default MorseInputButton;
