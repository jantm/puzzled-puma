import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import MenuButton from './components/MenuButton';
import homeStyle from './home.style';

const Home = ({ navigation }) => {
  const renderButtons = () => {
    const { navigate } = navigation;

    return ([
      <MenuButton
        onPress={() => navigate('Morse')}
        title="Morse"
        style={homeStyle.menuButton}
        key="1"
      />,
    ]);
  }

  return (
    <View style={homeStyle.container}>
      <ScrollView contentContainerStyle={homeStyle.menuContainer}>
        {renderButtons()}
      </ScrollView>
    </View>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Home',
});

export default Home;
