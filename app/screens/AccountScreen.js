import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: { name: 'format-list-bulleted', backgroundColor: colors.accent },
  },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: colors.secondary },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.constainer}>
        <ListItem
          title='Emanuel'
          subTitle='emanuel@gmail.com'
          image={require('../assets/headShotTwo.jpg')}
        />
      </View>
      <View style={styles.constainer}>
        <FlatList
          data={menuItems}
          keyExtrator={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor={colors.warning} />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  constainer: {
    marginVertical: 20,
  },
});
export default AccountScreen;
