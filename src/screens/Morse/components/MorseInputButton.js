import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import morseStyle from '../morse.style';
import { INPUT_BUTTONS } from '../morse.constants';

const { DASH, DOT } = INPUT_BUTTONS;

const MorseInputButton = ({ onPress, title, type }) => {
  let symbolStyle = [morseStyle.symbolStyle];

  switch (type) {
    case DOT:
      symbolStyle.push(morseStyle.dotSymbol);
      break;
    case DASH:
      symbolStyle.push(morseStyle.dashSymbol);
      break;
    }

  return (
    <TouchableOpacity
      style={morseStyle.inputButton}
      onPress={onPress}>
      <Image style={symbolStyle}></Image>
    </TouchableOpacity>
  );
}

MorseInputButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MorseInputButton;
