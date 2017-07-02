const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser')
var base64 = require('node-base64-image');
var http = require('http');
var rp = require('request-promise');
const util = require('util')

const app = express();
const apiRouter = new express.Router();

var vision = require('@google-cloud/vision')({
  projectId: 'showeralarm',
  keyFilename: '../keyfile.json'
});

app.use(bodyParser.text({ type: 'text/html' }))

app.post('/', (req, res) => {

  let baseBody = {
    "requests":[
      {
        "image":{
          "content": `${req.body}`
        },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults":10
          }
        ]
      }
    ]
  }

  var options = {
      method: 'POST',
      uri: 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC67QJq9x5R9s4MrFrvFvUJXTky77eqkuw',
      body: baseBody,
      json: true
  };

  rp(options)
      .then(function (parsedBody) {
          console.log(util.inspect(parsedBody, false, null))
          res.status(200).json(parsedBody);
      })
      .catch(function (err) {
          console.log(err);
      });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.use(cors());


