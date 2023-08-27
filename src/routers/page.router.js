const { Router } = require("express");
const { getAllPages, createPage, getPageById, updatePageById, deletePageById } = require("../controllers/page.controllers");
const { decodeToken, forAdmin } = require("../middlewares/auth.middleware");

const PageRouter= new Router();
// router.use([decodeToken,forAdmin]);
PageRouter.route('/').get(getAllPages).post(createPage)
PageRouter.route("/:id").get(getPageById).patch(updatePageById).delete(deletePageById);
module.exports=PageRouter;