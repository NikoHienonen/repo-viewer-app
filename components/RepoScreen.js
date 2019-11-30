import React, { Component } from 'react';
import { StyleSheet, View, Keyboard, Button, TextInput } from 'react-native';

import List from './List';
import RepoModel from './Models/RepoModel';

export default class RepoScreen extends Component {
  static navigationOptions = {
    title: 'Repo Viewer App',
  };
  state = {
    inputValue: '',
    searching: false,
    url: 'https://api.github.com/users/',
    repos: [],
    msg: 'Search for user'
  }
  //{() => navigate('Commits', {name: 'Repository'})}
  onChangeText = text => {
    this.setState({inputValue: text});
  }
  navigateToCommitScreen = (repo) => {
    const {navigate} = this.props.navigation;
    navigate('Commits', {repo: repo});
  }
  searchForUser = () => {
    if(this.state.inputValue) {
      Keyboard.dismiss();
      this.setState({searching: true});
      let fetchUrl = this.state.url+this.state.inputValue;
      fetch(fetchUrl)
        .then(res => res.json())
          .then(result => this.searchForRepos(result.repos_url))
            .catch(error => console.log(error));
    }
    else{
      this.setState({msg: 'Please input a username'})
    }
  }
  searchForRepos = (repoUrl) => {
    if(repoUrl){
      fetch(repoUrl)
        .then(res => res.json())
          .then(result => {
            let repos = this.repoArrayCreator(result);
            this.setState({repos, searching: false});
          })
            .catch(error => console.log(error))
    } else {
      this.setState({searching: false, msg: `No user found for '${this.state.inputValue}'`, repos: []});
    }
  }
  repoArrayCreator = (repos) => {
    return repos.map(repo => new RepoModel(repo.id, repo.full_name, repo.commits_url));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.onChangeText(text)}
            placeholder='Search for user...'
          />
          <Button
            title='Search'
            onPress={() => this.searchForUser()}
          />
        </View>
        <List searchActive={this.state.searching} data={this.state.repos} msg={this.state.msg}
        navigateToCommitScreen={this.navigateToCommitScreen} type='repo'/>
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
})