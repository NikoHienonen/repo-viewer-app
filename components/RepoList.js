import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, FlatList, ActivityIndicator } from 'react-native';

export default class RepoList extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  renderRepo = (repo) => {
    return <TouchableOpacity style={StyleSheet.repo} onPress={( => 
            this.props.navigation.)}>

    </TouchableOpacity>
  }
  renderList = () => {
    console.log(this.props.repos)
    return this.props.repos.length === 0
    ? <Text>No repositories</Text>
    : <FlatList
        data={this.props.repos}
        renderItem={({ item }) => this.renderRepo(item)}
        keyExtractor={repo => repo.id}
      />
  }
  renderActivityIndicator = () => {
    return <ActivityIndicator size="large" color="purple"/>
  }
  renderIndicatorOrList = () => {
    return this.props.searchActive 
    ? this.renderActivityIndicator()
    : this.renderList()
  }
  render() {
    console.log(this.props.searchActive);
    return (
      <this.renderIndicatorOrList/>
    )
  }
}

const styles = StyleSheet.create({
  repo: {
    backgroundColor: 'lightgreen'
  }
})
