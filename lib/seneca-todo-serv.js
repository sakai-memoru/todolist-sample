var seneca = require('seneca')();
var _ = require('lodash');

var ptn = {
  role : 'web',
  func : 'todo',
  cmd  : 'display'
}

seneca.add(ptn,(msg,response_cb)=>{
  var err = null;
  response_cb(err,{name : msg.name})
})

// debug -------------------------
var param = {
  name : 'Hello world'
}

var args = _.merge(ptn,param);
console.dir(args);

seneca.act(args,(err,result)=>{
  if(err) return console.log(err);
  console.log('name=' + result.name);
})

// debug -------------------------
var param2 = {
  name : 'Hello world2!'
}

args = _.merge(ptn,param2);

seneca.act(args,(err,result)=>{
  if(err) return console.log(err);
  console.log('name=' + result.name);
})


