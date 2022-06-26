import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ListItemSeparator({ color = 'light' }) {
  return (
    <View style={[styles.separator, { backgroundColor: colors[color] }]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
  },
});

export default ListItemSeparator;
