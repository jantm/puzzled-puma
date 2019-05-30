import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import semaphoreStyle from '../semaphore.style';
import EventFunction from '../../../types/eventFunction';

const { controlButton, controlButtonText } = semaphoreStyle;

type Props = {
  onPress: EventFunction,
  title: string,
};

const SemaphoreButton = ({ onPress, title }: Props) => (
  <TouchableOpacity
    style={controlButton}
    onPress={onPress}
  >
    <Text style={controlButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default SemaphoreButton;
