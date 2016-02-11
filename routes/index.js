var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Father", name: "Jolly" });
});

router.get('/mom', function(req, res, next) {
  res.render('mom', { title: "Mom", name: "Gurjit" });
});

router.get('/brother', function(req, res, next) {
  res.render('brother', {title: "Brother", name: "Karan" });
});

router.get('/varun', function(req, res, next) {
  res.render('varun', {title: "Varun"});
});

module.exports = router;
