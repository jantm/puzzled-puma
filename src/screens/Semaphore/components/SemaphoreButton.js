import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import semaphoreStyle from '../semaphore.style';


const SemaphoreButton = ({ onPress, title }) => (
  <TouchableOpacity
    style={semaphoreStyle.controlButton}
    onPress={onPress}
  >
    <Text style={semaphoreStyle.controlButtonText}>{title}</Text>
  </TouchableOpacity>
);

SemaphoreButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SemaphoreButton;
