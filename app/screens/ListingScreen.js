import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

// const listings = [
//   {
//     id: 1,
//     title: 'Leaf for sale',
//     price: 10.0,
//     image: require('../assets/listingImages/leaf.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Statue for sale',
//     price: 4998.98,
//     image: require('../assets/listingImages/statue.jpg'),
//   },
//   {
//     id: 3,
//     title: 'Building for sale',
//     price: 599.99,
//     image: require('../assets/listingImages/building.jpg'),
//   },
// ];

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
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
