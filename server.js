const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors({
  origin: '*'
}));

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
      message: 'Hello World'
  });
});

app.post('/api/form-parser', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.post('/api/form-ajax-parser', (req, res) => {
  const contentType = req.get('Content-Type');
  console.log(contentType);
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.listen(2020, () => {
  console.log('server is listening on port 2020');
});
