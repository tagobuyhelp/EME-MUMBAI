const { port, env } = require("./config/vars");
const app = require("./config/express");
const mongoose = require("./config/mongoose");
const bcrypt = require("bcryptjs");
const { User } = require("./models");

// open mongoose connection
mongoose.connect().then(async () => {
  try {
    const adminEmail = "hiemeacademy@gmail.com";
    const existingUser = await User.findOne({ email: adminEmail });
    if (!existingUser) {
      console.log(`Seeding default admin user: ${adminEmail}`);
      const hashedPassword = await bcrypt.hash("Mumbai@2026", 10);
      await User.create({
        first_name: "EME",
        last_name: "Admin",
        email: adminEmail,
        phone_number: "9831284098",
        password: hashedPassword,
        account_type: "admin",
      });
      console.log("Default admin user seeded successfully.");
    } else {
      console.log(`Default admin user (${adminEmail}) already exists.`);
    }
  } catch (err) {
    console.error("Error seeding default admin user:", err);
  }
});

// listen to requests
const server = app;
server.listen(port, () =>
  console.log(`Server started on port ${port} (${env})`)
);
