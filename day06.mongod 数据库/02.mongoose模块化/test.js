const express = require('express');

const port = '3000'

const app = express();

app.get("/",(req, res) => {
    res.send('hello express')
})

app.get('*',(req, res) => {
    res.status(404)
    res.send('404 not found')
})

app.listen(port);
