export default class RepoModel {
  constructor(id, name, commitUrl) {
    this.id = id.toString();
    this.name = name;
    this.commitUrl = commitUrl;
  }
}