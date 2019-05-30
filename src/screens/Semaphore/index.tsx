import React from 'react';
import { View } from 'react-native';
import SemaphorePatternInput from './modules/SemaphoreInput';
import SemaphoreTextOutput from './components/SemaphoreTextOutput';
import SemaphoreControls from './components/SemaphoreControls';
import semaphoreStyle from './semaphore.style';
import { getCodeKeyFromPattern, getSemaphoreDictionary, patternToLetter } from './semaphore.logic';
import { lettersToSemaphore } from './semaphore.data';

const dictionary = getSemaphoreDictionary(lettersToSemaphore);

type Props = null;
type State = {
  text: string,
};

export default class Semaphore extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Semaphore',
  };

  state: Readonly<State> = {
    text: '',
  };

  constructor(props: Props) {
    super(props);

    this.translate = this.translate.bind(this);
    this.reset = this.reset.bind(this);
    this.undo = this.undo.bind(this);
  }

  translate(indexPattern: Array<string>) {
    let { text } = this.state;
    const codeKey = getCodeKeyFromPattern(indexPattern);
    const newLetter = patternToLetter(codeKey, dictionary);

    if (newLetter) {
      text += newLetter;
      this.setState({ text });
    }
  }

  reset() {
    this.setState({ text: '' });
  }

  undo() {
    let { text } = this.state;
    text = text.slice(0, -1);

    this.setState({ text });
  }

  render() {
    const { text } = this.state;

    return (
      <View style={semaphoreStyle.container}>
        <SemaphoreTextOutput text={text} />
        <SemaphorePatternInput
          onPattern={this.translate}
        />
        <SemaphoreControls
          onUndo={this.undo}
          onReset={this.reset}
        />
      </View>
    );
  }
}
