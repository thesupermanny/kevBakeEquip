import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Boat for sale',
    price: 100,
    image: require('../assets/boatSale.jpg'),
  },
  {
    id: 2,
    title: 'Boat for sale',
    price: 100,
    image: require('../assets/boatSale.jpg'),
  },
  {
    id: 3,
    title: 'Boat for sale',
    price: 100,
    image: require('../assets/boatSale.jpg'),
  },
  {
    id: 4,
    title: 'Boat for sale',
    price: 100,
    image: require('../assets/boatSale.jpg'),
  },
  {
    id: 5,
    title: 'Boat for sale',
    price: 100,
    image: require('../assets/boatSale.jpg'),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
