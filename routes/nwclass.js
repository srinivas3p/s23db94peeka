

/* GET home page. 

router.get('/', function(req, res, next) {
  res.render('nwclass', { title: 'Search Results NuclearWarheads' });
});*/
var express = require('express');
const nwclass_controlers= require('../controllers/nwclass');
var router = express.Router();
/* GET costumes */
router.get('/', nwclass_controlers.nwclass_view_all_Page );
module.exports = router;


module.exports = router;
