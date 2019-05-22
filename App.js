import { createAppContainer, createStackNavigator } from 'react-navigation';
import { navigationScreens, navigationConfig } from './src/navigation/navigationScreens';

const AppNavigator = createStackNavigator(navigationScreens, navigationConfig);
const App = createAppContainer(AppNavigator);

export default App;
