import LottieView from 'lottie-react-native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  example: {
    height: 200,
    flex: 1,
  },
});
export default class Girl extends React.Component {
  render() {
    return (
      <LottieView
        source={require('./json/girl.json')}
        style={styles.example}
        autoPlay
        loop
      />
    );
  }
}
