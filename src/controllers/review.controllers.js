const Review = require("../db/models/review.model");


const reviewController = {};

// Create a new review
reviewController.createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read all reviews
reviewController.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Read a review by ID
reviewController.getReviewById = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await Review.findByPk(reviewId);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a review by ID
reviewController.updateReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const [updatedCount] = await Review.update(req.body, {
      where: { id: reviewId }
    });
    if (updatedCount > 0) {
      res.json({ message: "Review updated successfully" });
    } else {
      res.status(404).json({ message: "Review not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a review by ID
reviewController.deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const deletedCount = await Review.destroy({
      where: { id: reviewId }
    });
    if (deletedCount > 0) {
      res.json({ message: "Review deleted successfully" });
    } else {
      res.status(404).json({ message: "Review not found or not deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = reviewController;
