import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet, SafeAreaView } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  // Adding style for android screen so it does not go into StatusBar
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
export default Screen;
