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
import AppButton from '../components/AppButton';

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
      <View style={styles.btnContainer}>
        <AppButton title='Log In'></AppButton>
        <AppButton title='Sign Up' color='secondary'></AppButton>
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
  btnContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  logoTagLineContainer: {
    position: 'absolute',
    top: 70,
  },
});

export default WelcomeScreen;
