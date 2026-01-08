const { Blogs } = require("../models");
const { s3Uploader, s3Deleter } = require("../services/s3uploader");

const {
  Insert,
  Find,
  FindAndUpdate,
  Delete,
  HandleSuccess,
  HandleError,
  HandleServerError,
  IsExistsOne,
  FindOne,
} = require("./BaseController");

module.exports = {
  CreatePost: async (req, res) => {
    try {
      const {
        title = "",
        author = "",
        url = "",
        meta_title = "",
        meta_description = "",
        meta_keywords = "",
        short_description = "",
        main_content = "",
      } = req.body;

      const image_file = req.files?.image_file || null;

      // Validate phone number format
      if (
        !title ||
        !url ||
        !meta_title ||
        !meta_description ||
        !meta_keywords ||
        !main_content
      ) {
        return HandleError(res, "All fields are required");
      }
      if (!image_file) return HandleError(res, "Image File is required");

      // 1. Upload Image on s3
      let image_url = await s3Uploader(image_file, "blog");
      console.log(image_file);

      if (!image_url) return HandleError(res, "Image not uploaded");

      // Insert the data on Db
      const inserted = await Insert({
        model: Blogs,
        data: {
          title,
          author,
          url,
          meta_title,
          meta_description,
          meta_keywords,
          short_description,
          main_content,
          image: image_url,
        },
      });

      if (!inserted) {
        return HandleError(res, "Error in inserting data");
      }
      return HandleSuccess(res, inserted);
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  GetAllPost: async (req, res) => {
    try {
      const posts = await Find({
        model: Blogs,
      });
      if (!posts) {
        return HandleError(res, "Failed to get post data");
      }
      return HandleSuccess(res, posts);
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  GetPostDetails: async (req, res) => {
    try {
      const { _id = "" } = req.params;
      const post = await FindOne({
        model: Blogs,
        where: { _id },
      });
      if (!post) {
        return HandleError(res, "Failed to get post data");
      }
      return HandleSuccess(res, post);
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  GetPostDetailsByUrl: async (req, res) => {
    try {
      const { url = "" } = req.params;
      const post = await FindOne({
        model: Blogs,
        where: { url },
      });

      if (!post) {
        return HandleError(res, "Failed to get post data");
      }
      return HandleSuccess(res, post);
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  UpdatePost: async (req, res) => {
    try {
      const { _id = "" } = req.params;
      const {
        title = "",
        url = "",
        author = "",
        meta_title = "",
        meta_description = "",
        meta_keywords = "",
        short_description = "",
        main_content = "",
      } = req.body;

      const image_file = req.files?.image_file || null;

      // is post exists
      const post = await IsExistsOne({
        model: Blogs,
        condition: { _id },
      });

      if (!post) return HandleError(res, "Post not found");

      const updatedData = {};

      if (title) updatedData.title = title;
      if (author) updatedData.author = author;
      if (url) updatedData.url = url;
      if (meta_title) updatedData.meta_title = meta_title;
      if (meta_description) updatedData.meta_description = meta_description;
      if (meta_keywords) updatedData.meta_keywords = meta_keywords;
      if (short_description) updatedData.short_description = short_description;
      if (main_content) updatedData.main_content = main_content;

      if (image_file) {
        // // 1. Upload Image on s3
        const image_url = await s3Uploader(image_file, "blog");
        if (!image_url) return HandleError(res, "Image not uploaded");
        // updatedData.image = image_url;
        if (post.image) {
          const isDeleted = await s3Deleter(post.image, "blog");
          if (!isDeleted) console.warn("Failed to delete old image from S3");
        }
        updatedData.image = image_url;
      }

      const updated = await FindAndUpdate({
        model: Blogs,
        where: { _id },
        update: updatedData,
      });

      if (!updated) return HandleError(res, "Failed to update blog");
      return HandleSuccess(res, updated);
    } catch (error) {
      HandleServerError(res, req, error);
    }
  },

  DeletePost: async (req, res) => {
    try {
      const { _id } = req.params;

      // Check if the post exists
      const post = await IsExistsOne({
        model: Blogs,
        condition: { _id },
      });

      if (!post) {
        return HandleError(res, "Post not found");
      }

      // Delete the post
      const deleted = await Delete({
        model: Blogs,
        where: { _id },
      });

      if (!deleted) {
        return HandleError(res, "Error in deleting post");
      }
      return HandleSuccess(res, true);
    } catch (err) {
      HandleServerError(res, req, err);
    }
  },
};
