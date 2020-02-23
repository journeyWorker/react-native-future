import {
  Layout, Text, ViewPager,
} from '@ui-kitten/components';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import CardExample from 'src/home/CardExample';
import Girl from 'src/lottie/Girl';
import Smoking from 'src/lottie/Smoking';
const red = 'red';

const styles = StyleSheet.create({
  tab: {
    marginTop: 100,
    height: 400,
    borderColor: red,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Example = () => {
  const [ selectedIndex, setSelectedIndex ] = React.useState(0);
  return (
    <ViewPager  selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
      <Layout level="2" style={styles.tab}>
        <CardExample Thumbnail={Girl}>
          <Text category="h5">Tab 1</Text>
        </CardExample>
      </Layout>
      <Layout level="2" style={styles.tab}>
        <CardExample Thumbnail={Smoking}>
          <Text category="h5">Tab 2</Text>
        </CardExample>
      </Layout>
    </ViewPager>
  );
};

export default Example;
