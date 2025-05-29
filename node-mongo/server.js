const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/itemroutes');

const app = express();
app.use(bodyParser.json());

app.use('/prod', router); // All routes begin with /prod


mongoose.set("strictQuery", false);


mongoose.connect('mongodb://127.0.0.1:27017/pp')
  .then(() => {
    console.log('Connected to local MongoDB');
    app.listen(3000, () => {
      console.log('Node API app is running on port 3000');
    });
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });
