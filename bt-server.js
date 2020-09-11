const express = require('express');
const app = express();

const cors = require('cors');

const dotenv = require('dotenv').config();
const port = process.env.PORT;

const braintree = require('braintree');
const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY
});

app.use(cors());

app.get('/token', async (req, res) => {
  console.log('Received request from token');
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(response);
  });  
});

app.listen(port, () => {
  console.log(`Servicing requests at http://localhost:${port}`);
});