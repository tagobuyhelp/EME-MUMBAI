const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const Auth = Controllers.Auth;
const Middleware = require("../middlewares");
const Midd = Middleware.Auth;
const VerifyToken = Midd.VerifyToken;
const isAdmin = Midd.isAdmin;
// router.get("/refresh-token/:email/:token/:device", Auth.RefreshToken);
router.post("/login", Auth.Login);
router.post("/signup", Auth.SignUp);
router.post("/resend-otp", Auth.ResendOTP);
router.post("/forget-password", Auth.ForgetPassword);
router.put("/update-password",VerifyToken ,Auth.UpdatePassword);
router.post("/change-email-initiate",VerifyToken , Auth.ChangeEmailInitiate);
router.post("/verify-email",VerifyToken , Auth.VerifyEmail);

module.exports = router;
