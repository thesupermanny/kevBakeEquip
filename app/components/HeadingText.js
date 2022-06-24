//Encapsulation Styles for headings
import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function HeadingText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontWeight: '800',
    fontStyle: 'italic',
    color: 'white',
  },
});

export default HeadingText;
