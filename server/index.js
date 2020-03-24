const express = require('express');
const path = require('path');
const port = 2000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

app.listen(port, () => {
    console.log('PROXY listening on port 2000')
});