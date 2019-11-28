import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class RepoScreen extends Component {
  static navigationOptions = {
    title: 'Repo Viewer App',
  };
  state = {
    inputValue: ""
  }
  onChangeText = text => {
    this.setState({inputValue: text});
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeText(text)}
            placeholder="Search for user..."
          />
          <Button
            title="Search"
            onPress={() => navigate('Commits', {name: 'Vincit'})}
            style={styles.button}
          />
        </View>
        <View style={styles.list}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    margin: 10
  },
  inputContainer: {
    flexDirection:'row', 
  },
  input: {
    flex : 1,
    borderColor: 'gray', 
    borderWidth: 1,
    paddingLeft: 5,
    lineHeight: 20,
  },
  button: {
  },
  list: {
    backgroundColor: 'maroon'
  },
})