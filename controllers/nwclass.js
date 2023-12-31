var nwclass = require('../models/nwclass');




exports.nwclass_list = async function (req, res) {
    try {
        thenwclass = await nwclass.find();
        res.send(thenwclass);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};







exports.nwclass_view_all_Page = async function (req, res) {
    try {
        thenwclass = await nwclass.find();
        res.render('nwclass', { title: 'nwclass Search Results', results: thenwclass });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};





// for a specific nwclass.
exports.nwclass_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: nwclass detail: ' + req.params.id);
};


// Handle nwclass create on POST.
exports.nwclass_create_post = async function (req, res) {
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

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// Handle nwclass delete form on DELETE.
exports.nwclass_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: nwclass delete DELETE ' + req.params.id);
};
// Handle nwclass update form on PUT.



// for a specific nwclass.
exports.nwclass_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await nwclass.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


//Handle nwclass update form on PUT.
exports.nwclass_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await nwclass.findById(req.params.id)
        // Do updates of properties
        if (req.body.classification)
            toUpdate.classification = req.body.classification;
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.range) toUpdate.range = req.body.range;
        if (req.body.damage) toUpdate.damage = req.body.damage;

        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};


exports.nwclass_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await nwclass.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };



exports.nwclass_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await nwclass.findById( req.query.id)
res.render('nwclassdetail',
{ title: 'nwclass Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for creating a nwclass.
// No body, no in path parameter, no query.
// Does not need to be async
exports.nwclass_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('nwclasscreate', { title: 'nwclass Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


exports.nwclass_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await nwclass.findById(req.query.id)
res.render('nwclassupdate', { title: 'nwclass Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



exports.nwclass_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await nwclass.findById(req.query.id)
res.render('nwclassdelete', { title: 'nwclass Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


    
    