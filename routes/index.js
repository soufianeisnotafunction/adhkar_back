var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adhkar deployed with github actions', subtitle:'Invocations du matin et du soir' });
});

module.exports = router;
