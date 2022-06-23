import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/welcomeBackground.jpg')}
    >
      <View style={styles.logoTagLineContainer}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../assets/besLogo.png')}
        />
        <Text style={styles.tagLine}>For all your bakery equipment needs!</Text>
      </View>
      <View style={styles.logInBtn}>
        <Text>Log In</Text>
      </View>
      <View style={styles.signUpBtn}>
        <Text>Sign Up</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  logInBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  logoTagLineContainer: {
    position: 'absolute',
    top: 70,
  },
  signUpBtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.accent,
    alignItems: 'center',
  },
  tagLine: {
    color: 'white',
  },
});

export default WelcomeScreen;
