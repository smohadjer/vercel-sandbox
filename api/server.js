import formParser from './form-parser.js';
import formAjaxParser from './form-ajax-parser.js';
import formMultipartParser from './form-multipart-parser.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

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
      message: 'Send a POST request!'
  });
});

app.post('/api/form-parser', (req, res) => {
  formParser(req, res);
});

app.post('/api/form-ajax-parser', (req, res) => {
  formAjaxParser(req, res);
});

app.post('/api/form-multipart-parser', (req, res) => {
  formMultipartParser(req, res);
});

app.listen(2020, () => {
  console.log('server is listening on port 2020');
});
