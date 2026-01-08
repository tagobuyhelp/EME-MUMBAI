const path = require("path");
const dotenv = require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  mongodb: process.env.MONGO_CONNECTION_STRING,
  secret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV,
  public_image_url: process.env.PUBLIC_URL + "/images/",
  host_url: process.env.HOST_URL,
  tokenExpiryLimit: 86400, //3600
  otpExpiryLimit: 1,
  isAppSocketIOEnable: false,
  cloudinary_config: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  mail: {
    host: "smtp.hostinger.com",
    port: 465,
    auth: {
      user: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
    },
  },
};
