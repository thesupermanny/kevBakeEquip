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

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.constainer}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.accent}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name='' size={20} color={colors.accent} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType={'slide'}>
        <Screen>
          <Button title='close' onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
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
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
