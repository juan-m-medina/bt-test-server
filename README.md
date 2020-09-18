# What this repo is about

This is a simple example of getting a Braintree integration with Google Pay options.
The accompanying client for testing can be found here: 

# Setup
- Install Node if you don't have it - https://nodejs.org/en/download/.
- Clone the repo to a local folder of your choice.
- On the cloned folder run ```npm install```.
- Create a file named ```.env```. The contents of this file are the following variables:
  ```
  PORT=8000
  MERCHANT_ID=_your_merchant_id_from_braintree_
  PUBLIC_KEY=_your_public_key_
  PRIVATE_KEY=_your_private_key_
  ```
  Use any port number you want for the server, but make sure that if you pick the client you follow the instructions to update that to the port you pick here.
  For the various IDs and Keys refer to the Braintree Documentation.
- Service the application using `npm start` or `node ./bt-server.js'.

# Relevant Documentation

- Braintree Overview - Server Side: https://developers.braintreepayments.com/guides/google-pay/server-side/node.
- Braintree Customers - Server Side (which is what we use on this example): https://developers.braintreepayments.com/guides/customers/node.