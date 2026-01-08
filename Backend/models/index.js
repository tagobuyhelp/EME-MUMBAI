const mongoose = require("mongoose");

exports.User = require("./UserModel");
exports.Otp = require("./OtpModel");
exports.Token = require("./TokenModel");
exports.Admission = require("./AdmissionModel")
exports.Enquiry = require("./EnquiryModel")
exports.Blogs = require("./BlogsModel")

exports.Mongoose = mongoose;
