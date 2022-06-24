import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  // Adding style for android screen so it does not go into StatusBar
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
