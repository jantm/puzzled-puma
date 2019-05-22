import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SemaphoreButton from './SemaphoreButton';
import semaphoreStyle from '../semaphore.style';


const SemaphoreControls = ({ onUndo, onReset }) => (
  <View style={semaphoreStyle.controlsContainer}>
    <SemaphoreButton
      title="Reset"
      onPress={onReset}
    />
    <SemaphoreButton
      title="Undo"
      onPress={onUndo}
    />
  </View>
);

SemaphoreControls.propTypes = {
  onUndo: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default SemaphoreControls;
