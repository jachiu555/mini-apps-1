const express = require('express');
const app = express();
const port = 3000;
const router = require('./router.js')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static('public'));
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`))