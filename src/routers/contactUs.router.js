const { Router } = require("express");
const {
  createContactUs,
  getAllContactUs,
  getContactUsById,
  updateContactUs,
  deleteContactUs,
} = require("../controllers/contactUs.controllers");
const { forAdmin, decodeToken } = require("../middlewares/auth.middleware");
const ContactUsRouter = new Router();

ContactUsRouter.route("/")
  .post(createContactUs)
  .get(decodeToken, forAdmin, getAllContactUs);
ContactUsRouter.route("/:id")
  .get(getContactUsById)
  .patch(decodeToken, forAdmin, updateContactUs)
  .delete(decodeToken, forAdmin, deleteContactUs);

module.exports = ContactUsRouter;
