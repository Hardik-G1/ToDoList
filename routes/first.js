var express = require("express");
var router = express.Router();
var apicall = require("../api/apicalls");
var item = require("../models/item");
router.route("/")
    .get(apicall.showall)
    .post(apicall.newitem)
router.route("/:id")
    .get(apicall.getitem)
    .put(apicall.updateitem)
    .delete(apicall.deleteitem)
module.exports = router;