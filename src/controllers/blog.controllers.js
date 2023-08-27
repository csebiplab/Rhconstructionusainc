const createHttpError = require("http-errors");
const Blog = require("../db/models/blog.model");
const { Op } = require("sequelize");
const { sequelize } = require("../db");
const Comment = require("../db/models/Comment.model");
const Category = require("../db/models/category.model");

const obj = {};

obj.createBlog = async function (req, res, next) {
  try {
    const banner = req.file ? req.file.path : "";
    const data= req?.body;
    console.log(data);
    const newBlog = await Blog.create({
      title: data.title,
      slug: data.slug,
      banner: banner,
      categoryId:data.categoryId,
      keywords: data.keywords,
      description: data.description,
      summary: data.summary,
      blog: data.blog,
    });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

obj.getBlog = async function (req, res, next) {
  try {
    let { query, page = 1, limit = 10, orderBy } = req.query;
    page = Math.abs(page);
    limit = Math.abs(limit);
    const whereClause = {};
    if (query) {
      whereClause.title = { [Op.like]: `%${query}%` };
    }
    const offset = (page - 1) * Math.abs(limit);
    const blogs = await Blog.findAll({
      where: whereClause,
      attributes:[...Object.keys(Blog.getAttributes()),[sequelize.literal('(SELECT COUNT(*) FROM `comment` WHERE `comment`.`blog_id` = `blogs`.`id`)'), 'comment_count']],
      limit: parseInt(limit),
      offset: offset,
      include:[
        {model:Category}
      ],
      order: orderBy ? [orderBy.split(":")] : [["updatedAt", "DESC"]],
    });

    const totalCount = await Blog.count({ where: whereClause });
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      pages: Math.abs(totalPages),
      currentPage: Math.abs(parseInt(page)),
      limit: Math.abs(parseInt(limit)),
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

obj.getBlogById = async function (req, res, next) {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findByPk(blogId,{
      include:[
        {model:Category}
      ]
    });
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({
        message: "Blog not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

obj.updateBlog = async function (req, res, next) {
  const blogId = req.params.id;
  try {
    if (!blogId) throw createHttpError(404, "Invalid Blog ID.");
    const blog = await Blog.findByPk(blogId);
    if (!blog) throw createHttpError(404, "Blog not found.");
    const { slug, ...data } = req.body;
    console.log(data);
    const result = await blog.update(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

obj.deleteBlog = async function (req, res, next) {
  const blogId = req.params.id;
  try {
    const deletedCount = await Blog.destroy({
      where: { id: blogId },
    });
    if (deletedCount > 0) {
      res.json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({
        message: "Blog not found or not deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    });
  }
};

module.exports = obj;
