const express = require('express')
const router = express.Router()
const {currenttime, unixutcdate} = require("../controllers/dates")
router.route("/").post(currenttime)
router.route("/:date").post(unixutcdate)

module.exports = router
