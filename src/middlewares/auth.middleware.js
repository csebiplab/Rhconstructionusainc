const createHttpError = require("http-errors");
const Admin = require("../db/models/admin.mode");
const { auth } = require("firebase-admin");

const __ = {};

__.parseToken = function (req, res, next) {
  const token = req?.headers?.authorization || "";
  if (token) req.accessToken = token;
  console.log("___HEADERS", token);
  next();
};

__.decodeToken = async function (req, res, next) {
  try {
    const token = req?.accessToken;
    console.table({token})
    if (!token) throw createHttpError(404, "Token not found.");
    auth()
      .verifyIdToken(token)
      .then((decoded) => {
        req.user = {
          email: decoded?.email,
          uid: decoded?.uid,
          phone: decoded?.phone,
          ...decoded,
        };
        // console.log(decoded)
        return next();
      })
      .catch((error) => {
        req.user = null;
        console.log(error.message);
        return next();
      });
  } catch (error) {
    next(createHttpError(500, error?.message));
  }
};

__.forAdmin = async function (req, res, next) {
  try {
    const token = req.accessToken;
    const user = req.user;
    console.log(token,user);
    if (!token) throw createHttpError(404, "Token not found.");
    if (!user) throw createHttpError(404, "User not found.");
    const result = await Admin.findOne({
      where: {
        email: user?.email,
      },
    });
    if (result) next();
    else throw createHttpError(403, "Only for admin.");
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};

module.exports = __;
