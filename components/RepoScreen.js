import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class RepoScreen extends Component {
  static navigationOptions = {
    title: 'Repos',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Repo Viewer App</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Commits', {name: 'Jane'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 30
  }
})