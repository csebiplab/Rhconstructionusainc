const { Router } = require("express");
const { createContactUs, getAllContactUs, getContactUsById, updateContactUs, deleteContactUs } = require("../controllers/contactUs.controllers");
const ContactUsRouter = new Router();

ContactUsRouter.route("/").post(createContactUs).get(getAllContactUs);
ContactUsRouter.route("/:id").get(getContactUsById).patch(updateContactUs).delete(deleteContactUs);

module.exports = ContactUsRouter;
