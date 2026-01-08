const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogsSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    meta_title: {
      type: String,
      required: true,
    },
    meta_description: {
      type: String,
      required: true,
    },
    meta_keywords: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
      required: false,
      default: "",
    },
    main_content: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model("blogs", BlogsSchema);
module.exports = BlogsModel;
