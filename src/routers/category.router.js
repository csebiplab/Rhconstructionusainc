const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controllers");

const CategoryRouter = new Router();

CategoryRouter.route("/").get(getAllCategories).post(createCategory);
CategoryRouter.route("/:id").patch(updateCategory).delete(deleteCategory);

module.exports = CategoryRouter;
