import React from 'react';
import { View } from 'react-native';
import MorseControlButton from './MorseControlButton';
import MorseInputButton from './MorseInputButton';
import morseStyle from '../morse.style';
import { INPUT_BUTTONS } from '../morse.constants';
import EventFunction from '../../../types/eventFunction';

const { DASH, DOT } = INPUT_BUTTONS;

type Props = {
  onInput: EventFunction,
  onConfirm: EventFunction,
  onUndo: EventFunction,
};

const MorseButtons = ({ onInput, onConfirm, onUndo }: Props) => {
  const onDotPress = () => onInput(DOT);
  const onDashPress = () => onInput(DASH);

  const renderDashButton = () => (
    <MorseInputButton
      type={DASH}
      onPress={onDashPress}
    />
  );

  const renderDotButton = () => (
    <MorseInputButton
      type={DOT}
      onPress={onDotPress}
    />
  );

  const renderConfirmButton = () => (
    <MorseControlButton
      title="Ok"
      onPress={onConfirm}
    />
  );

  const renderUndoButton = () => (
    <MorseControlButton
      title="Undo"
      onPress={onUndo}
    />
  );

  return (
    <View style={morseStyle.controlsContainer}>
      <View style={morseStyle.controlsRow}>
        {renderDotButton()}
        {renderDashButton()}
        {renderConfirmButton()}
      </View>
      <View style={morseStyle.controlsRow}>
        {renderUndoButton()}
      </View>
    </View>
  );
};


export default MorseButtons;
