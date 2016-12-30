var seneca = require('seneca')();

var todo_plugin = (options) => {
  console.log('Hello seneca-plugin');
}

seneca.use(todo_plugin);

