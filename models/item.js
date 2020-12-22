var mongoose = require("mongoose");
var itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});
module.exports = mongoose.model("Item", itemSchema);