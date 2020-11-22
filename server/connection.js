let express = require('express');
let mysql = require('mysql');
let app = express();

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ingatlan'
});

connection.connect(function(error){
    if(!!error){
        console.log('Error')
    } else{
        console.log('Connected')
    }
});

app.get('/', function(req, resp){
    connection.query("SELECT * FROM ingatlanok", function(error, rows, filds){
        if(!!error){
            console.log('error in query');
        } else{
            console.log('Success');
            console.log(rows);
            resp.send(rows);
        }
    });
  });





app.listen(8080);