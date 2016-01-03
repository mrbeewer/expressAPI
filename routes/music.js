var express = require('express');
var router = express.Router();
var musicModel = require('../models/Music');

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
 * GET music listing
 */
router.get('/', function(req, res, next) {
  musicModel.find(function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(music);
    }
  });
});


/**
 * GET and FIND BY ID of music
 */
router.get('/:id', function(req, res, next) {
  musicModel.findById(req.params.id, function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(music);
    }
  })
});


/**
 * POST (CREATE) new music
 */
router.post('/', function(req, res, next) {
  musicModel.create(req.body, function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.status(200).send({message: "The following music has been added to the music api", music});
    }
  })
});


/**
 * PUT (Find By Id And Update) music
 */
router.put('/:id', function(req, res, next) {
  musicModel.findByIdAndUpdate(req.params.id, req.body, function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      var updatedMusic = req.body;
      res.status(200).send({message: "The music api has been updated.", updatedMusic});
    }
  })
});
router.patch('/:id', function(req, res, next) {
  musicModel.findByIdAndUpdate(req.params.id, req.body, function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      var updatedMusic = req.body;
      res.status(200).send({message: "The music api has been updated.", updatedMusic});

    }
  })
});



/**
 * DELETE (Find By Id And Remove) music
 */
router.delete('/:id', function(req, res, next) {
  musicModel.findByIdAndRemove(req.params.id, req.body, function(err, music) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.status(200).send({message: "The following music has been removed.", music});
    }
  })
});




module.exports = router;
