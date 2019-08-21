const knex = require('knex')({
  client: 'pg',
  connection:{
    host:'localhost',
    // user:'user',
    // pwd:'pwd',
    database:'todo_db'
  }
});

module.exports = knex;
