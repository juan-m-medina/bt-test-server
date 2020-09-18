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
app.use(express.json());

app.get('/token', async (req, res) => {
  console.log('Received request from token');
  gateway.clientToken.generate({}, function (err, response) {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(response);
  });  
});

app.post('/customer', async(req, res) => {
  console.log('Receive request customer creation');
  try {
    nonce_result = await gateway.paymentMethodNonce.find(req.body.nonce);
    result = await gateway.customer.create({ paymentMethodNonce: req.body.nonce});
    res.status(200).send(result);
  }
  catch (err) {
    console.log('Errored out on customer processing');
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Servicing requests at http://localhost:${port}`);
});
