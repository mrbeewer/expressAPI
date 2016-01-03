var express = require('express');
var router = express.Router();

// a handy little object for website info
var siteData = {
  title: 'Favorites API',
  api1Route: '/api/book/',
  api1Name: 'Books',
  api2Route: '/api/music/',
  api2Name: 'Music',
  api3Route: '/api/food/',
  api3Name: 'Foods'
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', siteData);
});

module.exports = router;
