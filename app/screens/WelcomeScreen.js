import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

//Created by me below
import colors from '../config/colors';
import AppText from '../components/AppText';
import HeadingText from '../components/HeadingText';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require('../assets/welcomeBackground.jpg')}
    >
      <View style={styles.logoTagLineContainer}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../assets/besLogo.png')}
        />
        <HeadingText Text style={styles.tagLine}>
          For all your bakery equipment needs!
        </HeadingText>
      </View>
      <View style={styles.logInBtn}>
        <AppText>Log In</AppText>
      </View>
      <View style={styles.signUpBtn}>
        <AppText>Sign Up</AppText>
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
