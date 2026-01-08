require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const { otpMailTemplate } = require("../public/mail/otp");
const { dynamicMailTemplate } = require("../public/mail/formdata");


const transpoter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  debug:true,
  auth: {
    user: process.env.GMAIL,
    pass: process.env.SMTP_PASS,
  },
});


module.exports = {
  sendOtp: async (to,  otpValue) => {
    try {
      const option = {
        from: "EME OTP Verification -- <" + process.env.GMAIL + ">",
        to: to,
        subject: "Mail for OTP Verification",
        html: otpMailTemplate( otpValue),
      };
      const info = await transpoter.sendMail(option);
      return true;
    } catch (e) {
      // console.log(e);
      return false;
    }
  },

  sendFormData: async (to,data,subject,form_name) => {
    try {
      const option = {
        from: "EME Student Information  <" + process.env.GMAIL + ">",
        to: to,
        subject: subject,
        html: dynamicMailTemplate(data,form_name),
      };
      const info = await transpoter.sendMail(option);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};
