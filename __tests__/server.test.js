// BASED ON IN-CLASS DEMO CODE -- WILL UPDATE

'use strict';

// SERVER FILE
const server = require('../src/server.js');

// Testing Cependencies
require('@code-fellows/supergoose');
const supertest = require('supertest');
const request = supertest(server.app);
const mockRequest = supertest(server);

// MODLES
const foodModel = require('../src/models/food.js');
const clothesModel = require('../src/models/clothes.js');

// ROUTES
const DataCollection = require('../src/models/data-collection-class.js');
const foodRoute = new DataCollection(foodModel);
const clothesRoute = new DataCollection(clothesModel);

// CLOTHES ROUTE TESTING FUNCTIONALITY
describe('Clothes Route Testing Functionality', () => {
  it('Will return a 404 if no route is found', async () => {
    await request.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404)
      })
  })

  it('Will return 404 on a bad route', async () => {
    await request.patch('/clothes')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('Will read a list of records from the db using GET', async () => {
    const item = {
      type: 'pants',
      color: 'denim',
      size: 30
    }

    clothesRoute.create(item);
    await request.get('/clothes')
      .then(result => {
        console.log(result.body);
        expect(result.body.length).toEqual(30);
        expect(result.status).toBe(200);
      })
  })

  it('Will update a record from the db using PUT', async () => {
    let idName;
    let newClothes = {
      type: 'shirt',
      color: 'white',
      size: 'L'
    }

    await clothesRoute.read()
      .then(result => {
        idName = result[0]._id
        console.log(result[0]._id);
      })

    await request.put(`/clothes/${idName}`).send(newClothes)
      .then(result => {
        console.log(result.body);
        Object.keys(newClothes).forEach(key => {
          expect(result.body[key]).toEqual(newClothes[key])
        })
        expect(result.body.type).toEqual('shirt');
        expect(result.status).toBe(200);
      })
  })

  // it('Will delete a record from the db using DELETE', async () => {
  //   let idName;

  //   await clothesRoute.read()
  //     .then(results => {
  //       idName = results[0]._id
  //       console.log(results[0]._id)
  //     })
  // })

  // await request.delete(`/clothes/${idName}`)
  //   .then(results => {
  //     expect(results.status).toBe(204);
  //   })

  // await clothesRoute.read()
  //   .then(result => {
  //     expect(result.length).toEqual(1);
  //   })
})

// FOOD ROUTE TESTING FUNCTIONALITY
describe('Food Route Testing Functionality', () => {
  it('Will return a 404 if no route is found', async () => {
    await request.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404)
      })
  })

  it('Will return 404 on a bad route', async () => {
    await request.patch('/food')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  })

  it('Will read a list of records from the db using GET', async () => {
    const item = {
      type: 'taco',
      flavor: 'chicken',
      calories: 125
    }

    foodRoute.create(item);
    await request.get('/food')
      .then(result => {
        console.log(result.body);
        expect(result.body.length).toEqual(125);
        expect(result.status).toBe(200);
      })
  })

  it('Will update a record from the db using PUT', async () => {
    let idName;
    let newFood = {
      type: 'burger',
      flavor: 'bacon',
      calories: 550
    }

    await foodRoute.read()
      .then(result => {
        idName = result[0]._id
        console.log(result[0]._id);
      })

    await request.put(`/food/${idName}`).send(newFood)
      .then(result => {
        console.log(result.body);
        Object.keys(newFood).forEach(key => {
          expect(result.body[key]).toEqual(newFood[key])
        })
        expect(result.body.type).toEqual('burger');
        expect(result.status).toBe(200);
      })
  })

  // it('Will delete a record from the db using DELETE', async () => {
  //   let idName;

  //   await foodRoute.read()
  //     .then(results => {
  //       idName = results[0]._id
  //       console.log(results[0]._id)
  //     })
  // })

  // await request.delete(`/food/${idName}`)
  //   .then(results => {
  //     expect(results.status).toBe(204);
  //   })

  // await clothesRoute.read()
  //   .then(result => {
  //     expect(result.length).toEqual(1);
  //   })
})
