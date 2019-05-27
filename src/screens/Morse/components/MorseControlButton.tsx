import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import morseStyle from '../morse.style';
import EventFunction from '../../../types/eventFunction';


type Props = {
  onPress: EventFunction,
  title: string,
};

const MorseControlButton = ({ onPress, title }: Props) => (
  <TouchableOpacity
    style={morseStyle.controlButton}
    onPress={onPress}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default MorseControlButton;
