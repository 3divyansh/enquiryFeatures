
const express = require("express");
const { createEnquiry } = require("../controllers/enquiryController");

const router = express.Router();

router.post("/enquiry", createEnquiry); 
module.exports = router;