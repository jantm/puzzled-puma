import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import morseStyle from '../morse.style';
import { INPUT_BUTTONS } from '../morse.constants';
import EventFunction from '../../../types/eventFunction';

const { DASH, DOT } = INPUT_BUTTONS;

type Props = {
  onPress: EventFunction,
  type: string,
};

const MorseInputButton = ({ onPress, type }: Props) => {
  const { symbolStyle, dotSymbol, dashSymbol } = morseStyle;
  let buttonSymbolStyle;

  switch (type) {
    case DOT:
      buttonSymbolStyle = { ...symbolStyle, ...dotSymbol };
      break;
    case DASH:
      buttonSymbolStyle = { ...symbolStyle, ...dashSymbol };
      break;
    default:
      buttonSymbolStyle = symbolStyle;
      break;
  }

  return (
    <TouchableOpacity
      style={morseStyle.inputButton}
      onPress={onPress}
    >
      <Image style={buttonSymbolStyle} />
    </TouchableOpacity>
  );
};

export default MorseInputButton;
