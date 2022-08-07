import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import colors from './app/config/colors';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LogInScreen from './app/screens/LogInScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const [imageUri, setImageUri] = useState();

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) alert('You need to enable Photo permissions!');
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) setImageUri(result.uri);
  //   } catch (error) {
  //     console.log('Error launching library', error);
  //   }
  // };

  return (
    <Screen>
      {/* <AppButton title={'Press me'} onPress={selectImage} /> */}
      {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
