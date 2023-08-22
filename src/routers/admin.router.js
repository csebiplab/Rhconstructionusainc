const { Router } = require("express");
const {
  getAllAdmins,
  getAdminByID,
  updateAdmin,
  deleteAdmin,
  isAdmin,
  createAdmin,
} = require("../controllers/admin.controllers");
const { decodeToken, forAdmin } = require("../middlewares/auth.middleware");

const AdminRouter = new Router();

AdminRouter.use([decodeToken,forAdmin]);

AdminRouter.route("/")
    .get(getAllAdmins)
    .post(createAdmin);

AdminRouter.route("/is-admin")
    .get(isAdmin);

AdminRouter.route("/:id")
  .get(getAdminByID)
  .patch(updateAdmin)
  .delete(deleteAdmin);

module.exports = AdminRouter;
