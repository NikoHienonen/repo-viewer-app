import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image } from 'react-native';

import RepoItem from './RepoItem';
import CommitItem from './CommitItem';

export default class List extends Component {
  renderItem = (item) => {
    if(item.avatar_url){console.log(item.avatar_url)};
    return this.props.type === 'repo'
    ? RepoItem(item, this.props.navigateToCommitScreen)
    : CommitItem(item);
  }
  renderList = () => {
    return this.props.data.length === 0
    ? <View style={styles.msgCont}>
        <Text style={styles.msg}>{this.props.msg}</Text>
      </View>
    : (
      <View style={styles.listContainer}>
        <Text style={styles.title}>{this.props.type === 'repo' 
        ? 'Repositories'  
        : 'Commits'}</Text>
        <FlatList
          style={styles.list}
          data={this.props.data}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => {return this.props.type === 'repo' ? item.id : item.date}}
        />
      </View>
    )
  }
  renderActivityIndicator = () => {
    return(
      <View style={styles.msgCont}>
        <ActivityIndicator size='large' color='purple'/>
      </View>
    )
  }
  renderIndicatorOrList = () => {
    return this.props.searchActive 
    ? this.renderActivityIndicator()
    : this.renderList()
  }
  render() {
    return (
      <this.renderIndicatorOrList/>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  list: {
    marginVertical: 10
  },
  msgCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  msg: {
    fontSize: 20
  }
})
