var nwclass = require('../models/nwclass');




exports.nwclass_list = async function(req, res) {
try{
thenwclass = await nwclass.find();
res.send(thenwclass);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};







exports.nwclass_view_all_Page = async function(req, res) {
try{
thenwclass = await nwclass.find();
res.render('nwclass', { title: 'nwclass Search Results', results: thenwclass });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};





// for a specific nwclass.
exports.nwclass_detail = function(req, res) {
res.send('NOT IMPLEMENTED: nwclass detail: ' + req.params.id);
};


// Handle nwclass create on POST.
exports.nwclass_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nwclass();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // 
    document.classification = req.body.classification;
    document.name = req.body.name;
    document.damage = req.body.damage;
    document.range = req.body.range;

    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// Handle nwclass delete form on DELETE.
exports.nwclass_delete = function(req, res) {
res.send('NOT IMPLEMENTED: nwclass delete DELETE ' + req.params.id);
};
// Handle nwclass update form on PUT.
exports.nwclass_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: nwclass update PUT' + req.params.id);
};