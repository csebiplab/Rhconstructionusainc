const ContactUs = require("../db/models/contactUs.model");


const contactUsController = {};

// Create a new contact us entry
contactUsController.createContactUs = async (req, res) => {
  try {
    const newContactUs = await ContactUs.create(req.body);
    res.status(201).json(newContactUs);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read all contact us entries
contactUsController.getAllContactUs = async (req, res) => {
  try {
    const contactUsEntries = await ContactUs.findAll();
    res.json(contactUsEntries);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read a contact us entry by ID
contactUsController.getContactUsById = async (req, res) => {
  const contactUsId = req.params.id;
  try {
    const contactUsEntry = await ContactUs.findByPk(contactUsId);
    if (contactUsEntry) {
      res.json(contactUsEntry);
    } else {
      res.status(404).json({ message: "Contact us entry not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a contact us entry by ID
contactUsController.updateContactUs = async (req, res) => {
  const contactUsId = req.params.id;
  try {
    const [updatedCount] = await ContactUs.update(req.body, {
      where: { id: contactUsId }
    });
    if (updatedCount > 0) {
      res.json({ message: "Contact us entry updated successfully" });
    } else {
      res.status(404).json({ message: "Contact us entry not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a contact us entry by ID
contactUsController.deleteContactUs = async (req, res) => {
  const contactUsId = req.params.id;
  try {
    const deletedCount = await ContactUs.destroy({
      where: { id: contactUsId }
    });
    if (deletedCount > 0) {
      res.json({ message: "Contact us entry deleted successfully" });
    } else {
      res.status(404).json({ message: "Contact us entry not found or not deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = contactUsController;
