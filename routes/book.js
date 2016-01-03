var express = require('express');
var router = express.Router();
var bookModel = require('../models/Book');
var musicModel = require('../models/Music');
var foodModel = require('../models/Food');

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to user error.'
  };
};


/**
 * When scuessfully querying, by default there is no response
 * To let the user know everything is good, let's do that
 * CHANGED: addMessage is no longer used, although
 * 'message' exists, it does not display
 *
 * switched to:
 *    res.status(200).send({message: "blah", book});
 */
function addMessageToSuccessfulQuery(obj, msg) {
  var response = obj;
  response.message = msg;
  return response;
};


/**
 * GET books listing
 */
router.get('/', function(req, res, next) {
  bookModel.find(function(err, books) {
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
  bookModel.findById(req.params.id, function(err, book) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(book);
    }
  })
});


/**
 * POST (CREATE) new book
 */
router.post('/', function(req, res, next) {
  bookModel.create(req.body, function(err, book) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      // res.json(book);
      res.status(200).send({message: "The following book has been added to the book api", book});
    }
  })
});


/**
 * PUT (Find By Id And Update) book
 */
router.put('/:id', function(req, res, next) {
  bookModel.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      // showing the variable book will show the book
      // prior to the update, I want to see the updated
      // result (but could use this to show both)
      var updatedBook = req.body;
      res.status(200).send({message: "The book api has been updated.", updatedBook});
      // res.json(addMessageToSuccessfulQuery(book, 'The book api has been updated.'));
    }
  })
});
router.patch('/:id', function(req, res, next) {
  bookModel.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      // res.json(addMessageToSuccessfulQuery(book, 'The book api has been updated.'));
      var updatedBook = req.body;
      res.status(200).send({message: "The book api has been updated.", updatedBook});

    }
  })
});


/**
 * DELETE (Find By Id And Remove) book
 */
router.delete('/:id', function(req, res, next) {
  bookModel.findByIdAndRemove(req.params.id, req.body, function(err, book) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      // res.json(addMessageToSuccessfulQuery(book, 'The book api has been removed.'));
      res.status(200).send({message: "The following book has been removed.", book});
    }
  })
});




module.exports = router;
