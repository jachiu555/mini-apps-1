const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('client'));

const port = 3000;

router.get('/', (req, res) => {
  res.send('Home page');
})

app.post('/', (req, res) => (
  res.send(req.body.json)
));

app.listen(port, () =>
  console.log('Listening on port ' + port)
);

module.exports = router;