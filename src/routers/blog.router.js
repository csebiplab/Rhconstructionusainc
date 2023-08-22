const { Router } = require("express");
const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blog.controllers");
const upload = require("../config/storage.config");
const { decodeToken, forAdmin } = require("../middlewares/auth.middleware");

const BlogRouter = new Router();

BlogRouter.route("/")
  .post(decodeToken, forAdmin, upload.single("banner"), createBlog)
  .get(getBlog);
BlogRouter.route("/:id")
  .get(getBlogById)
  .patch(decodeToken, forAdmin, upload.none(), updateBlog)
  .delete(decodeToken, forAdmin, deleteBlog);

module.exports = BlogRouter;
