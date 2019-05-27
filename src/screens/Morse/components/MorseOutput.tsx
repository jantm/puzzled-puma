import React from 'react';
import { Text } from 'react-native';
import morseStyle from '../morse.style';

type Props = {
  output: string,
};

const MorseOutput = ({ output }: Props) => (
  <Text style={morseStyle.output}>{output}</Text>
);

export default MorseOutput;
