import { AppRegistry, Platform } from 'react-native';

import App from './App';

require('react-native').unstable_enableLogBox();
AppRegistry.registerComponent('journeyApp', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('journeyApp', { rootTag });
}
