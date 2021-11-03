require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());
const client = require("./config/db");

client.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected to database");
})

app.get('/', (req, res) => {
    var q = "SELECT COUNT(*) FROM users;";
    client.query(q, (err, data) => {
        if (err) throw err;
        var count = (data.rows[0].count);
        res.send('WE HAVE ' + count + ' users');
    })
})


app.listen('3000', () => {
    console.log('listening on port 3000');
})
