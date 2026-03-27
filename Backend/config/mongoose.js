const mongoose = require("mongoose");
const { mongodb, env } = require("./vars");

//Init DB Connection
exports.connect = () => {
  return new Promise((resolve, reject) => {
    // print mongoose logs in dev env
    if (env === "DEV") {
      mongoose.set("debug", true);
    }
    mongoose
      .connect(mongodb)
      .then(() => {
        console.log("DB Connected.");
        resolve(true);
      })
      .catch((error) => {
        console.error("DB Connection Failed.");
        console.error(error?.message || error);
        reject(error);
        process.exit(-1);
      });
  });
};
