import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

import RepoList from './RepoList';
import RepoModel from './Models/RepoModel';

export default class RepoScreen extends Component {
  static navigationOptions = {
    title: 'Repo Viewer App',
  };
  state = {
    inputValue: "Vincit",
    searching: false,
    url: "https://api.github.com/users/",
    repos: []
  }
  //{() => navigate('Commits', {name: 'Repository'})}
  onChangeText = text => {
    this.setState({inputValue: text});
  }
  searchForUser = () => {
    if(this.state.inputValue) {
      this.setState({searching: true});
      let fetchUrl = this.state.url+this.state.inputValue;
      fetch(fetchUrl)
        .then(res => res.json())
          .then(result => this.searchForRepos(result.repos_url))
            .catch(error => console.log(error));
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
    }
  }
  repoArrayCreator = (repos) => {
    return repos.map(repo => new RepoModel(repo.id, repo.full_name, repo.commits_url));
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
            onPress={() => this.searchForUser()}
          />
        </View>
        <View style={styles.list}>
          <RepoList searchActive={this.state.searching} repos={this.state.repos}/>
        </View>
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
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})