/* eslint-disable no-unsafe-finally */
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'toor',
  connectionLimit: 5,
  port: 3306,
});

(async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('CREATE DATABASE course', function(err, result) {
      if (err) {
        throw err;
      }
      console.log(`database created ${result}`);
    });
    return conn;
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
})();

const fs = require('fs');

const sql = fs.readFileSync('todolist.sql').toString();
console.log(sql);
async function importFromSqlDump() {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(sql, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(`dump imported ${result}`);
    });
    return conn;
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
importFromSqlDump();

async function addToTable(val) {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(`INSERT INTO todolist VALUE ${val};`, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(`insert done ${result}`);
    });
    return conn;
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
const express = require('express');

const app = express();
const port = 3000;
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', (request, response) => {
  response.send('Hello from Express!');
});
app.get('/alltodos', (request, response) => {
  response.send('kek');
});
app.post('/create', (request, response) => {});
// eslint-disable-next-line consistent-return
app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
