const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const cors = require("cors");
const { env } = require("./vars");
const routes = require("../routes");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.raw({ limit: "50mb" }));
app.use(
  fileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
    debug: env === "DEV",
  })
);

// serve 'uploads' folder from 'src'
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//mount api routes
app.use("/", routes);

module.exports = app;
