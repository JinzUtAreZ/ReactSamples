const express = require('express');
const app = express();
const connect = require('./connection/connectdb');

// Init middleware
app.use(express.json({ extended: false }));

// routers for db
app.use('/api/products', require('./routes/products'));

// established connection //
app.listen(connect.port(), function () {
  var datetime = new Date();
  var message =
    ' Server running at ' + connect.port() + ' starting ' + datetime;
  console.log(message);
});
