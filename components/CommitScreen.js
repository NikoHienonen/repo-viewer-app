import React, { Component } from 'react';
import { Text } from 'react-native';

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
    <Text>{this.props.navigation.state.params.name}</Text>
    )
  }
}