const { Router } = require("express");
const { createComment, getPostComment } = require("../controllers/comment.controllers");
const router= new Router();

router.route("/:blog_id")
    .post(createComment)
    .get(getPostComment)

module.exports = router;
