import React from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import {
  NavigationScreenProps,
  NavigationScreenComponent,
} from 'react-navigation';
import MenuButton from './components/MenuButton';
import homeStyle from './home.style';


const Home: NavigationScreenComponent = ({ navigation }: NavigationScreenProps<any>) => {
  const renderButtons = () => {
    const { navigate } = navigation;

    return ([
      <MenuButton
        onPress={() => navigate('Morse')}
        title="Morse"
        key="1"
      />,
      <MenuButton
        onPress={() => navigate('Semaphore')}
        title="Semaphore"
        key="2"
      />,
    ]);
  };

  return (
    <View style={homeStyle.container}>
      <ScrollView contentContainerStyle={homeStyle.menuContainer}>
        {renderButtons()}
      </ScrollView>
    </View>
  );
};

Home.navigationOptions = () => ({
  headerTitle: 'Home',
});

export default Home;
