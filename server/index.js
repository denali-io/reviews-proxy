const express = require('express');
const path = require('path');
const cors = require('cors');
const httpProxy = require('http-proxy');
const port = 5000;
const app = express();
var proxy = httpProxy.createProxyServer({});
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log('PROXY listening on port 5000')
});