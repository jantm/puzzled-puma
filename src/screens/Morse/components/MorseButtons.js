import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MorseControlButton from './MorseControlButton';
import MorseInputButton from './MorseInputButton';
import morseStyle from '../morse.style';
import { INPUT_BUTTONS } from '../morse.constants';

const { DASH, DOT } = INPUT_BUTTONS;

const MorseInputButtons = ({ onInput, onConfirm, onUndo }) => {
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

MorseInputButtons.propTypes = {
  onInput: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
};

export default MorseInputButtons;
