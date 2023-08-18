const { Router } = require("express");
const reviewController = require("../controllers/review.controllers");

const ReviewRouter = new Router();

ReviewRouter
  .route("/")
  .post(reviewController.createReview)
  .get(reviewController.getAllReviews);
ReviewRouter
  .route("/:id")
  .get(reviewController.getReviewById)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = ReviewRouter;
