'use strict';

const express = require('express');

const clothesSchema = require('../models/clothes.js');
const Clothes = require('../models/data-collection-class.js');
const clothesItems = new Clothes(clothesSchema);

const clothesRouter = express.Router();

// ROUTES
clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

function getClothes (req, res) {
  let allClothes = clothesItems.read();
  res.status(200).json(allClothes);
}

function getOneClothes (req, res) {
  let id = parseInt(re.params.id); // does this need to be _id because of mongoDB??
  let clothes = clothesItems.read(id);
  res.status(200).json(clothes);
}

// CREATE
function createClothes (req, res) {
  let obj = req.body;
  let newClothes = clothesItems.create(obj);
  res.status(201).json(newClothes);
}

// UPDATE
function updateClothes (req, res) {
  let id = parseInt(req.params.id); // does this need to be _id because of mongoDB??
  let content = req.body;
  let updated = clothesItems.update(id, content); // does this need to be _id because of mongoDB??
  res.status(200).send(updated);
}

// DELETE
function deleteClothes (req, res) {
  let id = parseInt(req.params.id); // does this need to be _id because of mongoDB??
  let deleted = clothesItems.delete(id); // does this need to be _id because of mongoDB??
  res.status(204).send('item, and hopes, deleted');
}

module.exports = clothesRouter;
