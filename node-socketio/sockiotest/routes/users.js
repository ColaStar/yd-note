var express = require('express');
var router = express.Router();

// /* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let arrs = {a:[1,2,3,4,5,6,7,8]};
  res.end(JSON.stringify(arrs));
});

module.exports = router;
