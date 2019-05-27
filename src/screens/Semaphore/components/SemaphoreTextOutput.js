import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import semaphoreStyle from '../semaphore.style';


const SemaphoreTextOutput = ({ text }) => (
  <ScrollView contentContainerStyle={semaphoreStyle.textContainer}>
    <Text style={semaphoreStyle.text}>{text}</Text>
  </ScrollView>
);

SemaphoreTextOutput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SemaphoreTextOutput;
