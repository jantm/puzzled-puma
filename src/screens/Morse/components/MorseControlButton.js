import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import morseStyle from '../morse.style';


const MorseControlButton = ({ onPress, title }) => (
  <TouchableOpacity
    style={morseStyle.controlButton}
    onPress={onPress}>
    <Text style={morseStyle.confirmButtonText}>{title}</Text>
  </TouchableOpacity>
);

MorseControlButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default MorseControlButton;
