import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
