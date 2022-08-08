import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';

function ListItem({
  title,
  subTitle,
  padding = 15,
  image,
  IconComponent,
  needsChevrons = false,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.accent} onPress={onPress}>
        <View style={[styles.container, { padding: padding }]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {needsChevrons && (
            <MaterialCommunityIcons
              name='chevron-right'
              size={25}
              color={colors.primary}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});
export default ListItem;
