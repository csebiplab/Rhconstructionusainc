const { Router } = require("express");
const reviewController = require("../controllers/review.controllers");
const { forAdmin, decodeToken } = require("../middlewares/auth.middleware");

const ReviewRouter = new Router();

ReviewRouter
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getAllReviews);
ReviewRouter
  .route("/:id")
  .get(reviewController.getReviewById)
  .patch(decodeToken,forAdmin,reviewController.updateReview)
  .delete(decodeToken,forAdmin,reviewController.deleteReview);

module.exports = ReviewRouter;
