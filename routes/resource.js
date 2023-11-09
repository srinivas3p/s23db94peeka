var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var nwclass_controller = require('../controllers/nwclass');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// nwclass ROUTES ///
// POST request for creating a nwclass.
router.post('/nwclass', nwclass_controller.nwclass_create_post);
// DELETE request to delete nwclass.
router.delete('/nwclass/:id', nwclass_controller.nwclass_delete);
// PUT request to update nwclass.
router.put('/nwclass/:id', nwclass_controller.nwclass_update_put);
// GET request for one nwclass.
router.get('/nwclass/:id', nwclass_controller.nwclass_detail);
// GET request for list of all nwclass items.
router.get('/nwclass', nwclass_controller.nwclass_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"nwclass", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
