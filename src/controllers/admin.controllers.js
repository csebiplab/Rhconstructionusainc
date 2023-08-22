const createHttpError = require("http-errors");
const Admin = require("../db/models/admin.mode");

const __ = {};

__.createAdmin = async function (req, res, next) {
  try {
    const result = await Admin.create(req?.body);
    res.status(200).json(result);
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

__.getAllAdmins = async function (req, res, next) {
  try {
    const offset = 10;
    const { role, page = 1, limit = 10 } = req.query;
    const whereOptions = {};
    if (role) {
      whereOptions.role = role;
    }
    const { count, rows } = await Admin.findAndCountAll({
      where: whereOptions,
      limit,
      offset,
    });
    const totalPages = Math.ceil(count / limit);
    res.status(200).json({
      data: rows,
      limit,
      totalPages,
      currentPage: page,
      order: [['updatedAt','DESC']]
    });
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

__.getAdminByID = async function (req, res, next) {
  try {
    const id = req.params.id;
    const find_res = await Admin.findByPk(id);
    if (find_res) {
      res.status(200).json(find_res);
    } else {
      res.statu(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

__.updateAdmin = async function (req, res, next) {
  try {
    const id = req.params.id;
    const { id: _id, ...data } = req.body;
    const find_res = await Admin.findByPk(id);
    if (find_res) {
      const result = await find_res.update(data);
      res.status(200).json(result);
    } else {
      res.statu(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

__.deleteAdmin = async function (req, res, next) {
  try {
    const id = req.params.id;
    const find_res = await Admin.findByPk(id);
    if (find_res) {
      await find_res.destroy();
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

__.isAdmin = async function (req, res, next) {
  try {
    res.status(200).json({
      message: "ADMIN",
    });
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

module.exports = __;
