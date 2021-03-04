'use strict';

const mongoose = require('mongoose');
const Food = require('./models/food.js');
const Clothes = require('./models/clothes.js');

const MONGOBD_URI = 'mongodb://localhost:3000/lab-04-database';
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // THIS ALWAYS NEEDS TO BE PASSED IN.

mongoose.connect(MONGODB_URI, options);


// MORE STUFF TO ADD VIA DEMO LATER