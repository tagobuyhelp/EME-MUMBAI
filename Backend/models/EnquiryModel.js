const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    timing: { type: String, trim: true, default: null },

    // ✅ UTM Tracking fields
    utm_source: { type: String, trim: true, default: null },
    utm_medium: { type: String, trim: true, default: null },
    utm_campaign: { type: String, trim: true, default: null },
    utm_term: { type: String, trim: true, default: null },
    utm_content: { type: String, trim: true, default: null },

    // ✅ Additional tracking and context
    source: { type: String, trim: true, default: "organic" },
    page_url: { type: String, trim: true, default: null },
  },
  { timestamps: true }
);

const EnquiryModel = mongoose.model("enquiry", EnquirySchema);
module.exports = EnquiryModel;
