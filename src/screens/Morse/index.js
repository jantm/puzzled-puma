import React from 'react';
import { View } from 'react-native';
import morseStyle from './morse.style';
import MorseButtons from './components/MorseButtons';
import MorseCurrent from './components/MorseCurrent';
import MorseOutput from './components/MorseOutput';
import { getMorseDictionary, signToLetter } from './morse.helpers';
import { lettersToMorse } from './morse.data';

const morseDictionary = getMorseDictionary(lettersToMorse);

export default class Morse extends React.Component {
  static navigationOptions = {
    title: 'Morse',
  };

  constructor(props) {
    super(props);

    this.state = {
      output: '', // decoded text
      currentMorse: '', // current morse sign
      currentLetter: '',
    };

    this.onLetterConfirm = this.onLetterConfirm.bind(this);
    this.onUndo = this.onUndo.bind(this);
    this.onInputButtonPress = this.onInputButtonPress.bind(this);
  }

  onLetterConfirm() {
    let { currentMorse, currentLetter, output } = this.state;

    if (currentLetter.length) {
      output = `${output}${currentLetter}`;
      currentMorse = '';
      currentLetter = '';

      this.setState({ output, currentMorse, currentLetter });
    }
  }

  onUndo() {
    let { output, currentMorse, currentLetter } = this.state;

    if (currentMorse.length) {
      currentMorse = currentMorse.slice(0, -1);
      currentLetter = signToLetter(currentMorse, morseDictionary);
    } else {
      output = output.slice(0, -1);
    }

    this.setState({ output, currentMorse, currentLetter });
  }

  onInputButtonPress(input) {
    let { currentMorse, currentLetter } = this.state;
    currentMorse = `${currentMorse}${input}`;

    if (currentMorse.length) {
      currentLetter = signToLetter(currentMorse, morseDictionary);
    }

    this.setState({ currentMorse, currentLetter });
  }

  render() {
    const { currentMorse, currentLetter, output } = this.state;

    return (
      <View style={morseStyle.container}>
        <MorseOutput output={output} />
        <MorseCurrent
          currentMorse={currentMorse}
          currentLetter={currentLetter}
        />
        <MorseButtons
          onInput={this.onInputButtonPress}
          onConfirm={this.onLetterConfirm}
          onUndo={this.onUndo}
        />
      </View>
    );
  }
}
