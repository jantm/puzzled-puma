import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import morseStyle from '../morse.style';


const MorseOutput = ({ output }) => (
  <Text style={morseStyle.output}>{output}</Text>
);

MorseOutput.propTypes = {
  output: PropTypes.string.isRequired,
};

export default MorseOutput;
