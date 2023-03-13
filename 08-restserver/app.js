const express = require('express');
require('dotenv').config()

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hola mundo ...');
})

app.listen(port, () => {
    console.log(`Listening Server in port ${port}`);
})