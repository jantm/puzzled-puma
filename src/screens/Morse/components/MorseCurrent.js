import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import morseStyle from '../morse.style';


const MorseCurrent = ({ currentMorse, currentLetter }) => (
  <View style={morseStyle.currentInputContainer}>
    <Text style={morseStyle.currentMorse}>{currentMorse}</Text>
    <Text style={morseStyle.currentLetter}>{currentLetter}</Text>
  </View>
);

MorseCurrent.propTypes = {
  currentMorse: PropTypes.string.isRequired,
  currentLetter: PropTypes.string.isRequired,
};

export default MorseCurrent;
