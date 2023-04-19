var express = require('express');
const tennis_controlers= require('../controllers/tennis');
var router = express.Router();
/* GET tenniss */
router.get('/', tennis_controlers.tennis_view_all_Page );
module.exports = router;


router.get('/detail', tennis_controlers.tennis_view_one_Page);
router.get('/create', tennis_controlers.tennis_create_Page);
router.get('/update', tennis_controlers.tennis_update_Page);
router.get('/delete', tennis_controlers.tennis_delete_Page);

//var express = require('express');
//var router = express.Router();

/* GET home page. */

//router.get('/', function (req, res, next) {
  //  res.render('tennis',{title:'Search Results'});
//});

//module.exports = router;