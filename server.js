import formParser from './api/form-parser.js';
import formParserJS from './api/form-parser-js.js';
import formMultipartParser from './api/form-multipart-parser.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import staticData from './api/staticdata.js';


const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
      message: 'Send a POST request!'
  });
});

app.get('/api/staticdata', (req, res) => {
  staticData(req, res);
});

app.post('/api/form-parser', (req, res) => {
  formParser(req, res);
});

app.post('/api/form-parser-js', (req, res) => {
  formParserJS(req, res);
});

app.post('/api/form-multipart-parser', (req, res) => {
  formMultipartParser(req, res);
});

app.listen(2020, () => {
  console.log('server is listening on port 2020');
});
