import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ item, onDelete, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#380e5e',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    borderRadius: 7,
  },
  listItemText: {
    color: '#fff',
  },
});

export default GoalItem;
