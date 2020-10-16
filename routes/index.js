var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chris\'s family' });
});

/* GET home page. */
router.get('/chris', function (req, res, next) {
    res.render('chris', { title: 'Chris' });
});

/* GET home page. */
router.get('/marjorie', function (req, res, next) {
    res.render('marjorie', { title: 'Marjorie' });
});

/* GET home page. */
router.get('/bruce', function (req, res, next) {
    res.render('bruce', { title: 'Bruce' });
});


module.exports = router;
