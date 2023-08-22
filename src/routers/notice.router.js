const { Router } = require("express");
const noticeController = require("../controllers/notice.controllers");
const { forAdmin, decodeToken } = require("../middlewares/auth.middleware");

const NoticeRouter = new Router();

NoticeRouter
  .route("/")
  .post(noticeController.createNotice)
  .get(noticeController.getAllNotices);
NoticeRouter
  .route("/:id")
  .get(noticeController.getNoticeById)
  .patch(decodeToken,forAdmin,noticeController.updateNotice)
  .delete(decodeToken,forAdmin,noticeController.deleteNotice);

module.exports = NoticeRouter;
