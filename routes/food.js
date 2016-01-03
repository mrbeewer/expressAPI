var express = require('express');
var router = express.Router();
var foodModel = require('../models/Food');

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to user error.'
  };
};

/**
 * Due to the similarities, comments are in the book.js file
 */
 

/**
 * GET books listing
 */
router.get('/', function(req, res, next) {
  foodModel.find(function(err, books) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(books);
    }
  });
});



/**
 * GET and FIND BY ID of books
 */
router.get('/:id', function(req, res, next) {
  foodModel.findById(req.params.id, function(err, food) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(food);
    }
  })
});



/**
 * POST (CREATE) new food
 */
router.post('/', function(req, res, next) {
  foodModel.create(req.body, function(err, food) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.status(200).send({message: "The following food has been added to the food api", food});
    }
  })
});



/**
 * PUT (Find By Id And Update) food
 */
router.put('/:id', function(req, res, next) {
  foodModel.findByIdAndUpdate(req.params.id, req.body, function(err, food) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      var updatedFood = req.body;
      res.status(200).send({message: "The food api has been updated.", updatedFood});
    }
  })
});
router.patch('/:id', function(req, res, next) {
  foodModel.findByIdAndUpdate(req.params.id, req.body, function(err, food) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      var updatedFood = req.body;
      res.status(200).send({message: "The food api has been updated.", updatedFood});

    }
  })
});



/**
 * DELETE (Find By Id And Remove) food
 */
router.delete('/:id', function(req, res, next) {
  foodModel.findByIdAndRemove(req.params.id, req.body, function(err, food) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.status(200).send({message: "The following food has been removed.", food});
    }
  })
});




module.exports = router;
