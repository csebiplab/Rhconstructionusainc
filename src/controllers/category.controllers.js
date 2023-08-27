const Category = require("../db/models/category.model");

const __ = {};
__.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({});
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
__.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

__.updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.update({ name });
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

__.deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.destroy();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = __;
