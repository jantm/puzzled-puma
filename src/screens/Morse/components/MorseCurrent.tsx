import React from 'react';
import { Text, View } from 'react-native';
import morseStyle from '../morse.style';

type Props = {
  currentMorse: string,
  currentLetter: string,
};

const MorseCurrent = ({ currentMorse, currentLetter }: Props) => (
  <View style={morseStyle.currentInputContainer}>
    <Text style={morseStyle.currentMorse}>{currentMorse}</Text>
    <Text style={morseStyle.currentLetter}>{currentLetter}</Text>
  </View>
);

export default MorseCurrent;
