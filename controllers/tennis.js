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

// VIEWS
// Handle a show all view
exports.tennis_view_all_Page = async function(req, res) {
    try{
    thetenniss = await tennis.find();
    res.render('tennis', { title: 'tennis Search Results', results: thetenniss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.costume_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Costume();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Player_Name = req.body.costume_type;
    document.Player_Age = req.body.cost;
    document.No_Of_Matches_Played = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };