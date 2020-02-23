import {
  light as lightTheme, mapping,
} from '@eva-design/eva';
import {
  ApplicationProvider, IconRegistry, Text,
} from '@ui-kitten/components';
import {
  EvaIconsPack,
} from '@ui-kitten/eva-icons';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import TopNavigator from 'src/home/TopNavigator';

import Home from './src/home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <TopNavigator />
        <Home />
        <Text category="h3">
          swipe left right
        </Text>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
