export default class CommitModel {
  constructor(name, date, commitMsg, avatar) {
    this.name = name;
    this.date = this.dateFormat(date)
    this.commitMsg = commitMsg;
    this.avatar = avatar;
  }
  dateFormat(date){
    let newDate = new Date(date);
    return `${newDate.toLocaleTimeString()} ${newDate.toDateString()}`;
  }
}