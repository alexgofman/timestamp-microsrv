var moment = require('moment');
var express = require('express');
var router = express.Router();

// Get homepage

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:timestamp', function(req, res, next) {
  var timestamp = req.params.timestamp;
  var unix;
  var natural;

  // Unix timestamp
  if (moment(timestamp, "X").isValid()) {
    natural = moment(timestamp, "X").utcOffset(0).format("MMMM D, YYYY")
    unix = timestamp;
  } else if (moment(timestamp, "LL").isValid()){
    natural = timestamp;
    unix = moment(timestamp, "LL").utcOffset(0).unix();
  } else {
    natural = null;
    unix = null;
  }

  res.json({"unix": unix, "natural": natural})
});

module.exports = router;
