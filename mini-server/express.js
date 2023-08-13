const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.post('/ajax-form-ok', function (req, res) {
  res.send(200)
});

app.post('/ajax-form-ko', function (req, res) {
    res.send(401)
});

app.listen(3333)