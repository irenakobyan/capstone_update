//only logged users(USER) can add reviews

const express = require('express');

const router = express.Router();
const asyncHandler = require('express-async-handler');

const cafes = require('../cafes/cafes.service');
const reviews = require('./reviews.service');


//creating Reviews
//for that we need to get the /:id of restaurant(we can write only in their page) and id by token of logged user

router.post(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const result = await reviews.addReview(id, req.user, req.body);
        res.json(result);
      })
    );

//getting all the reviews by restaurant
//we need to give permisson to user to update his/her review, delete the review, view all reviews of certain restaurant

//viewing reviews of a certain restaurant
router.get( '/:id',
asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await reviews.Search(id);
    res.json(result);
  }))
 module.exports = router;


