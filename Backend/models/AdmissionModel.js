const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdmissionSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    date_of_birth: { type: String, trim: true },
    age: { type: Number },
    gender: { type: String, trim: true },
    location: { type: String, trim: true },
    blood_group: { type: String, trim: true },
    contact_number: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    // nationality: { type: String, trim: true },
    permanent_address: { type: String, trim: true },
    course_name: { type: String, trim: true },
    course_fee: { type: String, trim: true },
    course_duration: { type: String, trim: true },
    guardian_name: { type: String, trim: true },
    guardian_contact: { type: String, trim: true },
    academic_qualification: { type: String, trim: true },
  },
  { timestamps: true }
);

const AdmissionModel = mongoose.model("admission", AdmissionSchema);
module.exports = AdmissionModel;
