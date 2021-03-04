'use-strict';

const express = require('express');

const Foods = require('../models/food.js');
const foodItems = new Foods();

const foodRouter = express.Router();

// ROUTES
foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/foods/:id', updateFood);
foodRouter.delete('/foods/:id', deleteFood);

function getFood(req, res) {
  let allFoods = foodItems.get();
  res.status(200).json(allFoods);
}

function getOneFood(req, res) {
  let id = parseInt(req.params.id); // does this need to be _id because of mongoDB??
  let food = foodItems.get(id); // does this need to be _id because of mongoDB??
  res.status(200).json(food);
}

// CREATE
function createFood(req, res) {
  let obj = req.body;
  let newFood = foodItems.creat(obj);
  res.status(201).json(newFood);
}

// UPDATE
function updateFood(req, res) {
  let id= parseInt(req.params.id); // does this need to be _id because of mongoDB??
  let content = req.body;
  let updated = foodItems.update(id, content); // does this need to be _id because of mongoDB??
  res.status(200).json(updated);
}

// DELETE
function deleteFood(req, res) {
  let id = parseInt(req.params.id); // does this need to be _id because of mongoDB??
  let deleted = foodItems.delete(id); // does this need to be _id because of mongoDB??
  res.status(204).send('item, and hopes, delete');
}

module.exports = foodRouter;