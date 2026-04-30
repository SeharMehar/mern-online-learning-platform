const express = require("express");
const router = express.Router();

const { enroll } = require("../controllers/studentController");

router.post("/enroll", enroll);

module.exports = router;