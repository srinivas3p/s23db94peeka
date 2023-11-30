

/* GET home page. 

router.get('/', function(req, res, next) {
  res.render('nwclass', { title: 'Search Results NuclearWarheads' });
});*/
var express = require('express');
const nwclass_controlers= require('../controllers/nwclass');
var router = express.Router();
/* GET nwclasss */
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
router.get('/', nwclass_controlers.nwclass_view_all_Page );
/* GET detail nwclass page */
router.get('/detail',secured, nwclass_controlers.nwclass_view_one_Page);

router.get('/create',secured, nwclass_controlers.nwclass_create_Page);

/* GET create update page */
router.get('/update',secured, nwclass_controlers.nwclass_update_Page);

/* GET delete nwclass page */
router.get('/delete',secured, nwclass_controlers.nwclass_delete_Page);

module.exports = router;
