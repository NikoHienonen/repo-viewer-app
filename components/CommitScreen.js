import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import List from './List';
import CommitModel from './Models/CommitModel';

export default class CommitScreen extends Component {
  static navigationOptions = ({navigation}) => {
    let repo = navigation.getParam('repo');
    return {
      title: repo.name.split("/").pop()
    };
  };
  state= {
    msg: 'Commits',
    data: [],
    searching: false
  }
  componentDidMount(){
    if(this.state.data.length === 0) {
      this.fetchCommits();
    }
  }
  fetchCommits = () => {
    const { commitUrl } = this.props.navigation.getParam('repo');
    let cuttedUrl = commitUrl.replace('{/sha}', '');
    if(cuttedUrl) {
      console.log('fetching')
      this.setState({searching: true});
      fetch(cuttedUrl)
        .then(res => res.json())
          .then(result => {
            let commits = this.commitArrayCreator(result.slice(0, 10));
            this.setState({data: commits, searching: false});})
            .catch(error => console.log(error));
    }
  }
  commitArrayCreator = (commits) => {
    return commits.map(commitItem => {
      const { commit, author } = commitItem;
      let avatar_url = ''
      if(author) {avatar_url = author.avatar_url}
      return new CommitModel(commit.author.name, commit.author.date, commit.message, avatar_url);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.length === 0
        ? <Text>No commits yet</Text>
        : <List searchActive={this.state.searching} data={this.state.data} msg={this.state.msg} type='commit'/>}
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
})