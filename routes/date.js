const express = require('express')
const router = express.Router()
const {currenttime, unixutcdate} = require("../controllers/dates")
router.route("/").get(currenttime)
router.route("/:date").get(unixutcdate)

module.exports = router
