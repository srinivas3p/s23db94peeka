const mongoose = require("mongoose")
const nwclassSchema = mongoose.Schema({
    //{ classification: 'Class ICBM', range: 500, name: 'W88', damage: 100 }
    //{ classification: "Class ICBM", range: 500, name: "W88", damage: 100 }
    classification: String,
    range: {type:Number,
    required:true,
    min:2,
    max:444444},
    name: {type:String,
    required:true,
    minlength:2,
    maxlength:444444},
    damage: Number
})
module.exports = mongoose.model("nwclass", nwclassSchema)