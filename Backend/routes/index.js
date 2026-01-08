const express = require("express");
const router = express.Router();
const fs = require("fs");
var path = require("path");
const { env, secret } = require("../config/vars");

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Server Test API
router.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Server is running." });
});

// Server API Docs
if (env !== "PROD") {
  router.use(
    `/${secret}/apidocs`,
    express.static(__dirname + "/../../apidocs")
  );
}

// Serve static files from the "uploads" directory
router.use(
  "/uploads",
  express.static(path.join(__dirname, "../../src/uploads"))
);

// Import APIs
router.use("/v1/auth", require("./auth"));
router.use("/v1/admission", require("./admission"));
router.use("/v1/enquiry", require("./enquiry"));
router.use("/v1/dashboard", require("./dashboard"));
router.use("/v1/blog", require("./blogs"));

// No router found
router.use((req, res) => {
  res.status(404);
  res.json({ status: "failed", error: "Router not found." });
});

module.exports = router;

