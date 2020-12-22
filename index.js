var express = require("express");
app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
app.set("view engine", "ejs");
require('dotenv').config()
app.use(express.static(__dirname + "/public"));
var item = require("./models/item");
mongoose.connect(process.env.MONGOURL, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(() => {

    console.log('Connected to DB');

}).catch(err => {
    console.log('ERROR :', err.message);

});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var apiroute = require("./routes/first");
app.use("/api", apiroute);
app.get("/", function(req, res) {
    res.render("home")
})
app.get("*", function(req, res) {
    res.send("Error 404 page not found ")
})
app.listen(process.env.PORT || 3000, function() {
    console.log("server started");
});