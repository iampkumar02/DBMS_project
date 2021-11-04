require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());
const client = require("./config/db");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

client.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected to database");
})
app.post('/register', (req, res) => {
    //body-parser helps to extract the email from the request
    console.log("post req sended from..." + req.body.email);

    email = req.body.email;
    client.query(`INSERT INTO users(email) VALUES('${req.body.email}');`, (err, data) => {
        if (err)
            throw err;
        res.redirect('/');
    })
})

app.get('/', (req, res) => {
    var q = "SELECT COUNT(*) FROM users;";
    client.query(q, (err, data) => {
        if (err) throw err;
        var count = (data.rows[0].count);
        // res.send('WE HAVE ' + count + ' users');
        res.render('home', { data: count });
    })
})


app.listen('3000', () => {
    console.log('listening on port 3000');
})
