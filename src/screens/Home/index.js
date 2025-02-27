import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
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

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
