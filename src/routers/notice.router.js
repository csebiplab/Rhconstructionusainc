const { Router } = require("express");
const noticeController = require("../controllers/notice.controllers");

const NoticeRouter = new Router();

NoticeRouter
  .route("/")
  .post(noticeController.createNotice)
  .get(noticeController.getAllNotices);
NoticeRouter
  .route("/:id")
  .get(noticeController.getNoticeById)
  .patch(noticeController.updateNotice)
  .delete(noticeController.deleteNotice);

module.exports = NoticeRouter;
