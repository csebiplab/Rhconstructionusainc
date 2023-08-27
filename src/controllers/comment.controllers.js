const createHttpError = require("http-errors");
const Comment = require("../db/models/Comment.model");

const __ = {};

__.getPostComment = async function (req, res, next) {
  try {
    const blog_id = req?.params?.blog_id;
    if (!blog_id) throw createHttpError(404, "Blog id required.");
    const result = await Comment.findAll({
      where: {
        blog_id,
      },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    next(createHttpError(500, error?.message));
  }
};

__.createComment = async function (req, res, next) {
  try {
    const blog_id = req?.params?.blog_id;
    const data= req.body;
    if (!blog_id) throw createHttpError(404, "Blog id required.");
    const result = await Comment.create({
        blog_id,
        ...data
    });
    res.status(200).json(result);
  } catch (error) {
    next(createHttpError(500, error?.message));
  }
};


module.exports=__;