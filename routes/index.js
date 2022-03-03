var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.setTimeout(6000, function(){
    // call back function is called when request timed out.
    res.json({title: 'OMG'});
  });
});

/* GET home page. */
router.post('/login', function(req, res, next) {
  req.setTimeout(6000, function(){
    // call back function is called when request timed out.
    res.json({title: 'POST'});
  });
});

module.exports = router;
