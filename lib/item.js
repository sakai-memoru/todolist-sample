const uuid = require('uuid/v1');

class Item {
  constructor(msg){
    this.uuid    = msg.uuid || uuid(),
    this.title   = msg.title;    // require
    this.content = msg.content; // require
    this.userId  = msg.userId;   // required 
    this.created = msg.created || Date();
    this.updated = msg.updated || '';
    this.flag    = msg.flag || '';
    this.deleted = msg.deleted || '';
    this.deleteFlag = msg.deleteFlag || '';
  };
}

// debug -----------------------
//
// var title = 'sample';
// var content = 'first todos';
// var userId  = 'sakai.memoru';
// 
// var message = {
//   "title" : title,
//   "content" : content,
//   "userId" : userId
// };
// 
// var item = new Item(message);
// console.dir(item);

