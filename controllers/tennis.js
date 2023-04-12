var tennis = require('../models/tennis');
// List of all tenniss
exports.tennis_list = function(req, res) {
 res.send('NOT IMPLEMENTED: tennis list');
};
// for a specific tennis.
exports.tennis_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: tennis detail: ' + req.params.id);
};
// Handle tennis create on POST.
exports.tennis_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: tennis create POST');
};
// Handle tennis delete form on DELETE.
exports.tennis_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: tennis delete DELETE ' + req.params.id);
};
// Handle tennis update form on PUT.
exports.tennis_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: tennis update PUT' + req.params.id);
};

// List of all Tennis
exports.tennis_list = async function(req, res) {
    try{
    tennis = await tennis.find();
    res.send(tennis);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };