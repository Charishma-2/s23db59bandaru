var express = require('express');
const tennis_controlers= require('../controllers/tennis');
var router = express.Router();
/* GET tenniss */
router.get('/', tennis_controlers.tennis_view_all_Page );
module.exports = router;



//var express = require('express');
//var router = express.Router();

/* GET home page. */

//router.get('/', function (req, res, next) {
  //  res.render('tennis',{title:'Search Results'});
//});

//module.exports = router;