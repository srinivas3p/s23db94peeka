const mongoose = require("mongoose")
const nwclassSchema = mongoose.Schema({
    //{ classification: 'Class ICBM', range: 500, name: 'W88', damage: 100 }
    //{ classification: "Class ICBM", range: 500, name: "W88", damage: 100 }
    classification: String,
    range: Number,
    name: String,
    damage: Number
})
module.exports = mongoose.model("nwclass", nwclassSchema)