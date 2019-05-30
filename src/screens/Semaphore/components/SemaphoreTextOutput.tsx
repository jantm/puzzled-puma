import React from 'react';
import { ScrollView, Text } from 'react-native';
import semaphoreStyle from '../semaphore.style';

type Props = {
  text: string,
};

const SemaphoreTextOutput = ({ text }: Props) => (
  <ScrollView contentContainerStyle={semaphoreStyle.textContainer}>
    <Text style={semaphoreStyle.text}>{text}</Text>
  </ScrollView>
);

export default SemaphoreTextOutput;
