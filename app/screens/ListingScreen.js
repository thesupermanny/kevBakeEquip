import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';

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
  // Uses hook to get listings
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.errorerror && (
        <>
          <AppText>Oh no! We could not retrieve the products!</AppText>
          <AppText>Please try again!</AppText>
          <AppButton title='Retry' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
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
