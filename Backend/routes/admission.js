const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const Admission = Controllers.Admission;
const Middleware = require("../middlewares");
const Auth = Middleware.Auth;
const VerifyToken = Auth.VerifyToken;
const isAdmin = Auth.isAdmin;

//Admission routes
router.post("/add_admission", Admission.AddAdmission);
router.get(
  "/get_all_admission_data",
  VerifyToken,
  isAdmin,
  Admission.getAllAdmissionData
);
router.get(
  "/get-student-details/:student_id",
  VerifyToken,
  isAdmin,
  Admission.getStudentDetails
);
module.exports = router;
