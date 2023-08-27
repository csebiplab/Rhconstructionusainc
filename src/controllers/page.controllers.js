const Page = require("../db/models/page.model");
const __ = {};
// Create a new record
__.createPage = async (req, res) => {
  try {
    const { route, title, description, keywords } = req.body;
    const newItem = await Page.create({ route, title, description, keywords });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to create item" });
  }
};

// Get all records
__.getAllPages = async (req, res) => {
  try {
    const route = req.query?.route;
    const where = {};
    if (route) where.route = route;
    const items = await Page.findAll({
      where,
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve items" });
  }
};

// Get a single record by ID
__.getPageById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Page.findByPk(itemId);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve item" });
  }
};

// Update a record by ID
__.updatePageById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const [updatedRowsCount] = await Page.update(req.body, {
      where: { id: itemId },
    });
    if (updatedRowsCount > 0) {
      res.json({ message: "Item updated successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update item" });
  }
};

// Delete a record by ID
__.deletePageById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedRowCount = await Page.destroy({ where: { id: itemId } });
    if (deletedRowCount > 0) {
      res.json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item" });
  }
};

module.exports = __;
