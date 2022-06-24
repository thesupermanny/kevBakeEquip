import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('../assets/boatSale.jpg')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.error,
    position: 'absolute',
    top: 40,
    left: 30,
    borderRadius: 25,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.warning,
    position: 'absolute',
    top: 40,
    right: 30,
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
