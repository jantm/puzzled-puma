import React from 'react';
import { View } from 'react-native';
import homeStyle from './home.style';

export default class Home extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
  });

  render() {
    return (
      <View style={homeStyle.container}></View>
    );
  }
}
