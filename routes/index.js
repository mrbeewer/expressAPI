var express = require('express');
var router = express.Router();

// a handy little object for website info
var siteData = {
  title: 'Favorites API',
  version: '1.0.0',
  authors: 'David Beeler',
  date: '29Dec2015'
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', siteData);
});

module.exports = router;
