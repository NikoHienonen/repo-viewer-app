import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CommitItem(item) {
  //A function to render the commit-items in the commit-flatlist.
  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: item.avatar ? item.avatar : 'https://github.com/identicons/jasonlong.png'}}
          />
          <View style={styles.headText}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        </View>
        <Text style={styles.cardBody}>{item.commitMsg}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,

    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row'
  },
  headText: {
    marginLeft: 10
  },
  cardBody: {
    marginTop: 10
  }
})