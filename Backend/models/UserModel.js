const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true, trim: true },
    account_type: {
      type: String,
      required: true,
      trim: true,
      enum: ["admin", "enquirer"],
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
