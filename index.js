'use strict';

const MongoClient = require('mongodb').MongoClient;
const server = require('./src/server.js');
const mongoose = require('mongoose');
const Food = require('./models/food.js');
const Clothes = require('./models/clothes.js');

const MONGOBD_URI = 'mongodb://localhost:3000/lab-04-database';
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // THIS ALWAYS NEEDS TO BE PASSED IN.

require('dotenv').config();

mongoose.connect(MONGODB_URL, options)
  .then(() => {
    server.start(PORT);
  })
  .catch(err => console.error(err));