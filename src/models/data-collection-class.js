'use strict';

// WRAPPER
class Collections {
  constructor(models) {
    this.model = models;
  }

  read(id) {
    if (id) {
      return this.model.findOne({ _id: id });
    } else {
      return this.model.find({});
    }
  }

  create(obj) {
    let newObject = new this.model(obj);
    return newObject.save();
  }

  update(_id, obj) {
    return this.model.findByIdAndUpdate(_id, obj, {new: true });
  }

  delete(_id) {
    return this.model.findIdAndDelete(_id);
  }
}

module.exports = Collections;

