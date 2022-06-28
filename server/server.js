const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1', //setting up connection
    user: 'root',
    password: 'password'
})
connection.connect((err) => {
    if(err) throw err;
    console.log('Connected!')
})