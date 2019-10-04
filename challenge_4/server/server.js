const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));