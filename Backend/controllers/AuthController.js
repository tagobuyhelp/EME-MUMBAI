const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const mongoose = require("mongoose");
const Config = require("../config/vars");
const { Mail } = require("../services");
const { Otp, User, Token } = require("../models");

const saltRounds = 10;

const {
  IsExists,
  Insert,
  Find,
  CompressImageAndUpload,
  FindAndUpdate,
  Delete,
  HandleSuccess,
  HandleError,
  HandleServerError,
  Aggregate,
  ValidateEmail,
  PasswordStrength,
  ValidateAlphanumeric,
  ValidateLength,
  ValidateMobile,
  GeneratePassword,
  IsExistsOne,
  FindOne,
} = require("./BaseController");

module.exports = {
  /* 
   * @api {post} /auth/login Login
   * @apiName Login
   * @apiGroup Auth
   * @apiVersion 1.0.0
   * @apiDescription Login api.
   *
   * @apiBody {String} email Email.
   * @apiBody {String} password Password.
   *
   * @apiExample {js} Example usage:
      {
        "email": "cb@gmail.com",
        "password": "qwerty"
      }œ
   */
  Login: async (req, res, next) => {
    try {
      const { email = "", password = "", device = "" } = req.body;

      let validateError = null;
      if (!ValidateEmail(email.trim()))
        validateError = "Please enter a valid email id i.e abc@domain.com";

      if (validateError) return HandleError(res, validateError);

      let isUserExists = await IsExists({
        model: User,
        where: { email: email },
      });
      if (!isUserExists) {
        return HandleError(res, "User doesn't exists!");
      }

      let isPasswordCorrect = await bcrypt.compare(
        password,
        isUserExists[0].password
      );

      if (!isPasswordCorrect) return HandleError(res, "Incorrect Password!");

      let user = { ...isUserExists[0] };

      //This is for refresh token
      const active_session_refresh_token = GeneratePassword();
      //   //const device = req.headers["user-agent"];

      const token_expiry = moment()
        .add(Config.tokenExpiryLimit, "seconds")
        .valueOf();
      const access_token = jwt.sign(
        { id: user._id, email: user.email, account_type: user.account_type },
        Config.secret,
        {
          expiresIn: Config.tokenExpiryLimit, // 86400 expires in 24 hours -- It should be 1 hour in production
        }
      );

      let isTokenExists = await IsExists({
        model: Token,
        where: { user: user._id, email: user.email, device: device },
      });

      if (!isTokenExists) {
        // Insert token
        let insert = await Insert({
          model: Token,
          data: {
            user: user._id,
            email: user.email,
            device: device,
            active_session_refresh_token: active_session_refresh_token,
            access_token: access_token,
            token_expiry: token_expiry,
          },
        });
        if (!insert)
          return HandleError(res, "Failed to generate access token.");
        dbData = insert;
      } else {
        // Update token
        let updated = await FindAndUpdate({
          model: Token,
          where: { user: user._id, email: user.email, device: device },
          update: {
            $set: {
              access_token: access_token,
              active_session_refresh_token: active_session_refresh_token,
              token_expiry: token_expiry,
            },
          },
        });
        if (!updated)
          return HandleError(res, "Failed to generate access token.");
      }

      const userData = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        account_type: user.account_type,
        access_token: access_token,
        token_expiry: token_expiry,
        device: device,
        active_session_refresh_token: active_session_refresh_token,
      };

      return HandleSuccess(res, userData);
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  /*
   * @api {post} /auth/signup Signup
   * @apiName Signup
   * @apiGroup Auth
   * @apiVersion 1.0.0
   * @apiDescription Send OTP as blank first time to generate an otp. Next time send with OTP to validate and register.
   *
   * @apiBody {String} first_name First Name.
   * @apiBody {String} last_name Last Name.
   * @apiBody {String} email Email.
   * @apiBody {String} mobile Mobile.
   * @apiBody {String} country_code Country Code.
   * @apiBody {String} otp Verification Code.
   * @apiBody {String} password Password.
   * @apiBody {String= "ngo_admin", "customer"} account_type Account Type.
   *
   * @apiExample {json} Example usage:
      {
          "first_name": "CB",
          "last_name": "Asif Akram",
          "email": "cb@gmail.com",
          "mobile": "9933000187",
          "otp": "",
          "password": "qwerty",
          "account_type": "cb_admin",
      }
   */
  SignUp: async (req, res, next) => {
    try {
      const {
        first_name = "",
        last_name = "",
        email = "",
        phone_number = "",
        otp = "",
        password = "",
        account_type = "",
        // profile_image_url= "",
      } = req.body;

      let validateError = null;
      if (
        !ValidateAlphanumeric(first_name.trim()) ||
        !ValidateLength(first_name.trim()) ||
        !ValidateAlphanumeric(last_name.trim()) ||
        !ValidateLength(last_name.trim())
      )
        validateError =
          "Please enter a valid first name & last name without any special character and less than 25 character.";

      if (!ValidateEmail(email.trim()))
        validateError = "Please enter a valid email id i.e abc@domain.com";
      if (!ValidateMobile(phone_number.trim()))
        validateError =
          "Please enter a valid phone number without ISD code i.e 990xxxxx05.";

      if (validateError) return HandleError(res, validateError);

      let isUserExists = await IsExists({
        model: User,
        where: { email: email },
      });

      if (isUserExists)
        return HandleError(
          res,
          "User Already Exists!, Try with another email."
        );

      let expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() - Config.otpExpiryLimit);

      if (otp) {
        let isOtpExists = await IsExists({
          model: Otp,
          where: {
            email: email,
            otp: otp,
            createdAt: { $gt: expiry },
          },
        });
        if (!isOtpExists) return HandleError(res, "Failed to verify OTP.");
        else if (isOtpExists) {
          Delete({
            model: Otp,
            where: { email: email },
          });
        }

        const password_hash = await bcrypt.hash(password, saltRounds);

        let data = {
          first_name,
          last_name,
          phone_number,
          email,
          password: password_hash,
          account_type,
        };

        let inserted = await Insert({
          model: User,
          data: data,
        });
        if (!inserted) {
          return HandleError(
            res,
            "Failed to create account. Please contact system admin."
          );
        }

        let user = { ...inserted._doc };

        const token_expiry = moment()
          .add(Config.tokenExpiryLimit, "seconds")
          .valueOf();
        const access_token = jwt.sign(
          { id: user._id, email: user.email, account_type: user.account_type },
          Config.secret,
          {
            expiresIn: Config.tokenExpiryLimit, // 86400 expires in 24 hours -- It should be 1 hour in production
          }
        );

        let insert = await Insert({
          model: Token,
          data: {
            user: user._id,
            email: user.email,
            access_token: access_token,
            token_expiry: token_expiry,
          },
        });
        if (!insert)
          return HandleError(res, "Failed to generate access token.");

        user = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone_number: user.phone_number,
          account_type: user.account_type,
          access_token: access_token,
          token_expiry: token_expiry,
        };

        return HandleSuccess(res, user);
      }

      // Send OTP
      let isOtpExists = await IsExists({
        model: Otp,
        where: { email: email, createdAt: { $gt: expiry } },
      });
      if (isOtpExists)
        return HandleError(
          res,
          "Too many OTP requests. Please try after sometime."
        );

      const otpValue = Math.floor(100000 + Math.random() * 900000);
      let otpStatus = null;
      if (Config.env === "DEV") {
        otpStatus = await Mail.sendOtp(email, otpValue);
        if (!otpStatus)
          return HandleError(
            res,
            "Failed to send OTP. Please contact system admin."
          );
      }
     
      const inserted = await Insert({
        model: Otp,
        data: { otp: otpValue, email: email },
      });
      if (!inserted) return HandleError(res, "Failed to send OTP.");
      return HandleSuccess(res, { otp: true });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  /**
   * @api {get} /auth/refresh-token/:email/:token/:device Refresh Token
   * @apiName Refresh Token
   * @apiGroup Auth
   * @apiVersion 1.0.0
   * @apiDescription Refresh the token once its expired.
   *
   * @apiParam {String} email Email.
   * @apiParam {String} token Refresh Token.
   * @apiParam {String} device User Agent.
   *
   * @apiExample {json} Example usage:
      {
        "email": "tohidujjamanhoque@gmail.com",
          "token": "9n6Xf3moNTuC8KIP",
          "device": "Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F119.0.0.0%20Safari%2F537.36"
      }
   */
  RefreshToken: async (req, res, next) => {
    try {
      const { token = "", email = "", device = "" } = req.params;

      if (!token.trim() || !email.trim())
        return HandleError(res, "Invalid email or token.");

      const isUserExists = await IsExists({
        model: User,
        where: {
          email: email,
        },
      });

      if (!isUserExists) return HandleError(res, "Invalid email.");

      const isTokenExists = await IsExists({
        model: Token,
        where: {
          email: email,
          active_session_refresh_token: token,
          device: device,
        },
      });

      if (!isTokenExists) return HandleError(res, "Invalid Refresh token.");

      //const active_session_refresh_token = GeneratePassword();
      const token_expiry = moment()
        .add(Config.tokenExpiryLimit, "seconds")
        .valueOf();
      const access_token = jwt.sign(
        {
          id: isUserExists[0]._id,
          email: isUserExists[0].email,
          name: isUserExists[0].name,
        },
        Config.secret,
        {
          expiresIn: Config.tokenExpiryLimit, // 86400 expires in 24 hours -- It should be 1 hour in production
        }
      );

      let updated = await FindAndUpdate({
        model: Token,
        where: {
          email: email,
          active_session_refresh_token: token,
          device: device,
        },
        update: {
          $set: {
            access_token: access_token,
            token_expiry: token_expiry,
          },
        },
      });
      if (!updated) return HandleError(res, "Failed to generate access token.");

      return HandleSuccess(res, {
        access_token,
        token_expiry,
        active_session_refresh_token: token,
        device: device,
      });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  /**
   * @api {post} /auth/resend-otp Resend OTP
   * @apiName ResendOtp
   * @apiGroup Auth
   * @apiVersion 1.0.0
   * @apiDescription Resend OTP to the user's email for verification.
   *
   * @apiParam {String} email User's email address.
   *
   * @apiExample {json} Example usage:
   *   {
   *     "email": "cb@gmail.com"
   *   }
   *
   * @apiSuccess {Boolean} otp True if OTP is sent successfully.
   *
   * @apiError {String} error Message explaining the error.
   * @apiError {String} error_message Details of why OTP cannot be resent (e.g. "Too many OTP requests").
   */

  ResendOTP: async (req, res, next) => {
    try {
      const { email = "" } = req.body;

      let validateError = null;
      if (!ValidateEmail(email.trim())) {
        validateError = "Please enter a valid email id i.e abc@domain.com";
      }

      if (validateError) return HandleError(res, validateError);

      let isUserExists = await IsExists({
        model: User,
        where: { email: email },
      });

      if (isUserExists) {
        return HandleError(res, "User already exist!");
      }

      let expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() - Config.otpExpiryLimit);

      // Check if the OTP already exists for the given email and is still valid
      let isOtpExists = await IsExists({
        model: Otp,
        where: { email: email, createdAt: { $gt: expiry } },
      });

      if (isOtpExists) {
        // OTP still valid, return message saying OTP is already sent
        return HandleError(
          res,
          "Too many OTP requests. Please try after sometime."
        );
      }
      const otpValue = Math.floor(100000 + Math.random() * 900000);
      let otpStatus = null;

      if (Config.env === "DEV") {
        otpStatus = await Mail.sendOtp(email, otpValue);
        if (!otpStatus) {
          return HandleError(
            res,
            "Failed to send OTP. Please contact system admin."
          );
        }
      }

      const inserted = await Insert({
        model: Otp,
        data: { otp: otpValue, email: email },
      });

      if (!inserted) {
        return HandleError(res, "Failed to send OTP.");
      }

      return HandleSuccess(res, { otp: true });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  ForgetPassword: async (req, res, next) => {
    try {
      const { email = "", otp, newPassword = "" } = req.body;

      // Validation of Data
      let validateError = null;
      if (email === "" || newPassword === "") {
        validateError = "All fields are required";
      }
      if (validateError) return HandleError(res, validateError);

      // Validate email
      if (!ValidateEmail(email.trim())) {
        return HandleError(
          res,
          "Please enter a valid email id i.e abc@domain.com"
        );
      }

      // Check if user exists
      let isUserExists = await IsExists({
        model: User,
        where: { email: email },
      });

      if (!isUserExists) {
        return HandleError(res, "User does not exist!");
      }

      // If OTP is not provided, send a new OTP
      if (!otp) {
        let expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() - Config.otpExpiryLimit);

        // Check if the OTP already exists and is still valid
        let isOtpExists = await IsExists({
          model: Otp,
          where: { email: email, createdAt: { $gt: expiry } },
        });

        if (isOtpExists) {
          return HandleError(
            res,
            "Too many OTP requests. Please try after sometime."
          );
        }

        const otpValue = Math.floor(100000 + Math.random() * 900000);
        let otpStatus = null;

        if (Config.env === "DEV") {
          otpStatus = await Mail.sendOtp(email, otpValue);
          if (!otpStatus) {
            return HandleError(
              res,
              "Failed to send OTP. Please contact system admin."
            );
          }
        }

        const inserted = await Insert({
          model: Otp,
          data: { otp: otpValue, email: email },
        });

        if (!inserted) {
          return HandleError(res, "Failed to send OTP.");
        }

        return HandleSuccess(res, { otp: true });
      }

      // If OTP is provided, verify it
      let isOtpValid = await IsExists({
        model: Otp,
        where: { email: email, otp: otp },
      });

      if (!isOtpValid) {
        return HandleError(res, "Invalid or expired OTP.");
      }

      // Update the user's password
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      const updated = await FindAndUpdate({
        model: User,
        where: { email: email },
        update: { password: hashedPassword },
      });

      if (!updated) {
        return HandleError(res, "Failed to reset password.");
      }

      // Delete the OTP after successful password reset
      await Delete({
        model: Otp,
        where: { email: email },
      });

      return HandleSuccess(res, { message: "Password reset successful." });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  /**
   * @api {put} /auth/change-password Change Password
   * @apiName Update Password
   * @apiGroup Business
   * @apiVersion 1.0.0
   * @apiDescription Change Password by applying the old password then new password.
   *@apiBody {String} old_password Old Password.
   *@apiBody {String} password New Password.
   *@apiBody {String} confirm_password Confirm New Password.
   * @apiExample {json} Example usage:
      {
        "old_password": "12345",
        "password":"qwerty",
        "confirm_password":"qwerty"
      }
   */

  UpdatePassword: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { old_password, new_password, confirm_password } = req.body;

      if (!new_password || !confirm_password)
        return HandleError(res, "Password can not be empty.");
      else if (new_password != confirm_password)
        return HandleError(res, "Confirm password didn't matched.");
      else if (!old_password)
        return HandleError(res, "Old password is invalid.");

      const password_hash = await bcrypt.hash(new_password, saltRounds);

      const user = await IsExistsOne({
        model: User,
        where: {
          _id: _id,
        },
      });
      if (!user) return HandleError(res, "Invalid user.");

      const isPasswordCorrect = await bcrypt.compare(
        old_password,
        user.password
      );

      if (!isPasswordCorrect)
        return HandleError(res, "Incorrect Old Password!");

      const update = await FindAndUpdate({
        model: User,
        where: {
          _id: _id,
        },
        update: {
          password: password_hash,
        },
      });

      if (!update) return HandleError(res, "Failed to update password.");

      return HandleSuccess(res, true);
    } catch (err) {
      return HandleServerError(res, req, err);
    }
  },

  ChangeEmailInitiate: async (req, res, next) => {
    try {
      const { new_email = "" } = req.body;
      const { _id } = req.user;

      const isUserExists = await IsExistsOne({
        model: User,
        where: { _id: _id },
      });
      if (!isUserExists) return HandleError(res, "User not found.");

      let expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() - Config.otpExpiryLimit);

      const old_email = isUserExists?.email;

      let isOtpExists = await IsExists({
        model: Otp,
        where: { email: old_email, createdAt: { $gt: expiry } },
      });
      if (isOtpExists)
        return HandleError(
          res,
          "Too many OTP requests. Please try after sometime."
        );

      let isOtpExistsNew = await IsExists({
        model: Otp,
        where: { email: new_email, createdAt: { $gt: expiry } },
      });
      if (isOtpExistsNew)
        return HandleError(
          res,
          "Too many OTP requests. Please try after sometime."
        );

      // Generate OTPs
      const oldEmailOtp = Math.floor(100000 + Math.random() * 900000);
      const newEmailOtp = Math.floor(100000 + Math.random() * 900000);

      let oldOtpStatus = null;
      if (Config.env === "DEV") {
        oldOtpStatus = await Mail.sendOtp(old_email, oldEmailOtp);
        if (!oldOtpStatus)
          return HandleError(
            res,
            "Failed to send OTP. Please contact system admin."
          );
      }
      // console.log("OTP Value: ", otpValue);
      const inserted = await Insert({
        model: Otp,
        data: { otp: oldEmailOtp, email: old_email },
      });
      if (!inserted) return HandleError(res, "Failed to send OTP.");

      let newOtpStatus = null;
      if (Config.env === "DEV") {
        newOtpStatus = await Mail.sendOtp(new_email, newEmailOtp);
        if (!newOtpStatus)
          return HandleError(
            res,
            "Failed to send OTP. Please contact system admin."
          );
      }

      const insertedNew = await Insert({
        model: Otp,
        data: { otp: newEmailOtp, email: new_email },
      });
      if (!insertedNew) return HandleError(res, "Failed to send OTP.");

      return HandleSuccess(res, { otp: true });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },

  VerifyEmail: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { oldEmailOtp, newEmailOtp, newEmail } = req.body;

      if (!oldEmailOtp || !newEmailOtp || !newEmail)
        return HandleError(res, "Invalid data.");

      const isUserExists = await IsExistsOne({
        model: User,
        where: { _id: _id },
      });
      if (!isUserExists) return HandleError(res, "User not found.");

      let expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() - Config.otpExpiryLimit);

      let oldOtpExists = await IsExists({
        model: Otp,
        where: {
          email: isUserExists?.email,
          otp: oldEmailOtp,
          createdAt: { $gt: expiry },
        },
      });
      if (!oldOtpExists)
        return HandleError(res, "Failed to verify old email OTP.");
      else if (oldOtpExists) {
        Delete({
          model: Otp,
          where: { email: isUserExists?.email },
        });
      }

      let newOtpExists = await IsExists({
        model: Otp,
        where: {
          email: newEmail,
          otp: newEmailOtp,
          createdAt: { $gt: expiry },
        },
      });
      if (!newOtpExists)
        return HandleError(res, "Failed to verify old email OTP.");
      else if (newOtpExists) {
        Delete({
          model: Otp,
          where: { email: newEmail },
        });
      }

      let updated = await FindAndUpdate({
        model: User,
        where: { _id: _id },
        update: { email: newEmail },
      });

      if (!updated) return HandleError(res, "Failed to update email.");

      return HandleSuccess(res, { updated: true });
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },
};
