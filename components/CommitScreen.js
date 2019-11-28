import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CommitScreen extends Component {
  static navigationOptions = ({navigation}) => {
    let name = navigation.getParam('name');
    return {
      title: name
    };
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.navigation.state.params.name}'s repositories</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    margin: 10
  },
  title: {
    fontSize: 30
  }
})