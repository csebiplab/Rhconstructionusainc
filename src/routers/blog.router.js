const { Router } = require("express");
const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blog.controllers");

const BlogRouter = new Router();

BlogRouter.route("/").post(createBlog).get(getBlog);
BlogRouter.route("/:id").get(getBlogById).patch(updateBlog).delete(deleteBlog);

module.exports = BlogRouter;
