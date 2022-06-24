import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title='Boat for sale'
        subTitle='Less than 100k rows, I promise'
        image={require('./app/assets/boatSale.jpg')}
      />
    </View>
  );
  // return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: 'yellowgreen',
  },
});
