var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '资讯大屏' });
});
/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: '资讯后台管理系统' });
});
router.get('/brent', function(req, res, next) {
  res.render('brent');
});

router.get('/test', function(req, res, next) {
  res.render('test');
});

module.exports = router;
