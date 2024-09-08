import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function History({ route }) {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.calculation}</Text>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  historyItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});