const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const Blogs = Controllers.Blogs;
const Middleware = require("../middlewares");
const Midd = Middleware.Auth;

// Blogs routes
router.post("/add-blog", Blogs.CreatePost);
router.get("/get-all-blogs-data", Blogs.GetAllPost);
router.get("/get-blog-details/:_id", Blogs.GetPostDetails);
router.get("/get-blog-details-by-url/:url", Blogs.GetPostDetailsByUrl);
router.put("/update-blog/:_id", Blogs.UpdatePost);
router.delete("/delete-blog/:_id", Blogs.DeletePost);

module.exports = router;
