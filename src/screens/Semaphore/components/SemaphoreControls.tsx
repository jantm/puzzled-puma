import React from 'react';
import { View } from 'react-native';
import SemaphoreButton from './SemaphoreButton';
import semaphoreStyle from '../semaphore.style';
import EventFunction from '../../../types/eventFunction';


type Props = {
  onUndo: EventFunction,
  onReset: EventFunction,
};

const SemaphoreControls = ({ onUndo, onReset }: Props) => (
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

export default SemaphoreControls;
