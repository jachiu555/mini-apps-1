const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

router.get('/', (req, res) => {
  res.send('Home page');
})

app.post('/', (req, res) => (
  res.send('POST successful')
  ));

app.listen(port, () =>
  console.log('Listening on port ' + port)
);

app.use(express.static('client'));

module.exports = router;