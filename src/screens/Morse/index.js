import React from 'react';
import { Text, View } from 'react-native';
import morseStyle from './morse.style';
import MorseButtons from './components/MorseButtons';
import MorseCurrent from './components/MorseCurrent';
import MorseOutput from './components/MorseOutput';
import { getMorseDictionary, signToLetter } from './morse.helpers';
import lettersToMorse from './morse.data';

const morseDictionary = getMorseDictionary(lettersToMorse);

export default class Morse extends React.Component {
  static navigationOptions = {
    title: 'Morse',
  };

  constructor() {
    super(...arguments);

    this.state = {
      output: '', // decoded text
      currentMorse: '', // current morse sign
      currentLetter: '',
    };

    this._confirm = this._confirm.bind(this);
    this._undo = this._undo.bind(this);
    this._onInputButtonPress = this._onInputButtonPress.bind(this);
  }

  _confirm() {
    let { currentMorse, currentLetter, output } = this.state;

    if (currentLetter.length) {
      output = `${output}${currentLetter}`;
      currentMorse = '';
      currentLetter = '';

      this.setState({ output, currentMorse, currentLetter });
    }
  }

  _undo() {
    let { output, currentMorse, currentLetter } = this.state;

    if (currentMorse.length) {
      currentMorse = currentMorse.slice(0, -1);
      currentLetter = signToLetter(currentMorse, morseDictionary);
    } else {
      output = output.slice(0, -1);
    }

    this.setState({ output, currentMorse, currentLetter });
  }

  _onInputButtonPress(input) {
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
          onInput={this._onInputButtonPress}
          onConfirm={this._confirm}
          onUndo={this._undo}
        />
      </View>
    );
  }
}

