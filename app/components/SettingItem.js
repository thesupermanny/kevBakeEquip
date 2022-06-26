import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function SettingItem({ name, icon, iconBGColor = 'primary' }) {
  return (
    <TouchableHighlight
      underlayColor={colors.accent}
      onPress={() => console.log('touch')}
    >
      <View style={styles.settingCard}>
        {/* <Image style={styles.image} source={image} /> */}
        <View style={[styles.icon, { backgroundColor: colors[iconBGColor] }]}>
          {icon}
        </View>
        <View style={styles.textContainer}>
          <AppText>{name}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingCard: {
    backgroundColor: colors.light,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SettingItem;
