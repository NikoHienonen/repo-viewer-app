import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RepoItem(item, navigateToCommitScreen) {
  return (
    <TouchableOpacity onPress={() => {navigateToCommitScreen(item)}}>
          <Text style={styles.repoItem}>{item.name}</Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  repoItem: {
    fontSize: 18
  }
})
