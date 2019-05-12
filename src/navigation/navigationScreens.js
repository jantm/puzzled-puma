import HomeScreen from '../screens/Home';
import MorseScreen from '../screens/Morse';

export const navigationScreens = {
  Home: { screen: HomeScreen },
  Morse: {
    screen: MorseScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
};

export const navigationConfig = {
  initialRouteName: 'Home',
};
