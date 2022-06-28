import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

import AppText from '../AppText';

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.text}>{error}</AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.error,
  },
});
export default AppErrorMessage;
