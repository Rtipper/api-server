'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next('name not provided') // error handling middleware
  } else {
    next(); //validator checked out, move to next. if none, go into route.
  }
}

module.exports = validator;