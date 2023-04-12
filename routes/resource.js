var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tennis_controller = require('../controllers/tennis');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// tennis ROUTES ///
// POST request for creating a tennis.
router.post('/tenniss', tennis_controller.tennis_create_post);
// DELETE request to delete tennis.
router.delete('/tenniss/:id', tennis_controller.tennis_delete);
// PUT request to update tennis.
router.put('/tenniss/:id', tennis_controller.tennis_update_put);
// GET request for one tennis.
router.get('/tenniss/:id', tennis_controller.tennis_detail);
// GET request for list of all tennis items.
router.get('/tenniss', tennis_controller.tennis_list);
module.exports = router;