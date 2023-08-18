const Notice = require("../db/models/notice.model");

const noticeController = {};

// Create a new notice
noticeController.createNotice = async (req, res) => {
  try {
    const newNotice = await Notice.create(req.body);
    res.status(201).json(newNotice);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read all notices
noticeController.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read a notice by ID
noticeController.getNoticeById = async (req, res) => {
  const noticeId = req.params.id;
  try {
    const notice = await Notice.findByPk(noticeId);
    if (notice) {
      res.json(notice);
    } else {
      res.status(404).json({ message: "Notice not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a notice by ID
noticeController.updateNotice = async (req, res) => {
  const noticeId = req.params.id;
  try {
    const [updatedCount] = await Notice.update(req.body, {
      where: { id: noticeId }
    });
    if (updatedCount > 0) {
      res.json({ message: "Notice updated successfully" });
    } else {
      res.status(404).json({ message: "Notice not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a notice by ID
noticeController.deleteNotice = async (req, res) => {
  const noticeId = req.params.id;
  try {
    const deletedCount = await Notice.destroy({
      where: { id: noticeId }
    });
    if (deletedCount > 0) {
      res.json({ message: "Notice deleted successfully" });
    } else {
      res.status(404).json({ message: "Notice not found or not deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = noticeController;