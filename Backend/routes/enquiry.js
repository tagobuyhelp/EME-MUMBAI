const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const Enquiry = Controllers.Enquiry;
const Middleware = require("../middlewares");
const Auth = Middleware.Auth;
const VerifyToken=Auth.VerifyToken
const isAdmin=Auth.isAdmin

// Enquiry routes
router.post("/add_enquiry", Enquiry.AddEnquiry);
router.get(
  "/get_all_enquiry_data",
  VerifyToken,
  isAdmin,
  Enquiry.getAllEnquiryData
);


//....without auth.....
// router.post("/add_enquiry", Enquiry.AddEnquiry);
// router.get(
//   "/get_all_enquiry_data",
 
//   Enquiry.getAllEnquiryData
// );



module.exports = router;
