import LottieView from 'lottie-react-native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// import source from './json/smokingManWalking.json';

const styles = StyleSheet.create({
  example: {
    height: 220,
    flex: 1,
  },
});
export default class Smoking extends React.Component {
  render() {
    return (
      <LottieView
        source={require('./json/smokingManWalking.json')}
        style={styles.example}
        autoPlay
        loop
      />
    );
  }
}
