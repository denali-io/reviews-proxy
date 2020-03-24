const express = require('express');
const path = require('path');
const cors = require('cors');
const httpProxy = require('http-proxy');
const port = 2000;
const app = express();
var proxy = httpProxy.createProxyServer({});
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));

app.all('/', (req, res) => {
    console.log('req')
    proxy.web(req, res, {target: 'http://localhost:5000'})
})


app.listen(port, () => {
    console.log('PROXY listening on port 2000')
});