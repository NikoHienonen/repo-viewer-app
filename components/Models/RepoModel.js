export default class RepoModel {
  //Model for the data from the repositories we need.
  constructor(id, name, commitUrl) {
    this.id = id.toString();
    this.name = name;
    this.commitUrl = commitUrl;
  }
}