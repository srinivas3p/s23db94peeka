

/* GET home page. 

router.get('/', function(req, res, next) {
  res.render('nwclass', { title: 'Search Results NuclearWarheads' });
});*/
var express = require('express');
const nwclass_controlers= require('../controllers/nwclass');
var router = express.Router();
/* GET nwclasss */
router.get('/', nwclass_controlers.nwclass_view_all_Page );
/* GET detail nwclass page */
router.get('/detail', nwclass_controlers.nwclass_view_one_Page);

router.get('/create', nwclass_controlers.nwclass_create_Page);

/* GET create update page */
router.get('/update', nwclass_controlers.nwclass_update_Page);

module.exports = router;
