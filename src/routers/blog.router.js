const { Router } = require("express");
const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blog.controllers");
const upload = require("../config/storage.config");

const BlogRouter = new Router();

BlogRouter.route("/").post(upload.single("banner"),createBlog).get(getBlog);
BlogRouter.route("/:id").get(getBlogById).patch(upload.none(),updateBlog).delete(deleteBlog);

module.exports = BlogRouter;
