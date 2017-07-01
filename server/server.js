const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser')

const app = express();
const apiRouter = new express.Router();

var vision = require('@google-cloud/vision')({
  projectId: 'showeralarm',
  keyFilename: '../keyfile.json'
});

app.use(bodyParser.text({ type: 'text/html' }))

app.post('/', (req, res) => {

  var image = new Buffer(req.body, 'base64');

  vision.detectLabels(image)
  .then((results) => {
    const labels = results[0];
    if(labels.includes('shower')){
      res.send(labels)
    }
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.use(cors());


