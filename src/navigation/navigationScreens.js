import HomeScreen from '../screens/Home';
import MorseScreen from '../screens/Morse';
import SemaphoreScreen from '../screens/Semaphore';

export const navigationScreens = {
  Home: { screen: HomeScreen },
  Morse: {
    screen: MorseScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  Semaphore: {
    screen: SemaphoreScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
};

export const navigationConfig = {
  initialRouteName: 'Home',
};
