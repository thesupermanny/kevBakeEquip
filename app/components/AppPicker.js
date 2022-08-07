import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  onSelectItem,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = '100%',
}) {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={[styles.constainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.accent}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={colors.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType={'slide'}>
        <Screen>
          <Button title='close' onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',

    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
