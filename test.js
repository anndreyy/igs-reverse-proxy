const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
var url = require('url');

// parse application/json
app.use(express.json())


app.use(function (req, res, next) {
    // escrever na BD
    console.log('url', req.url);   
    var requrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl,
    });
    console.log('requrl', requrl);

    console.log("req.body", req.body);
    console.log("req.params", req.params);

    next();
});

app.get('//', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
