const { port, env} = require("./config/vars")
const app = require("./config/express")
const mongoose = require("./config/mongoose");

// open mongoose connection
mongoose.connect();

// listen to requests
const server = app;
server.listen(port, () =>
  console.log(`Server started on port ${port} (${env})`)
);
