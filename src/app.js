const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const morgan = require("morgan");
const BlogRouter = require("./routers/blog.router");
const ReviewRouter = require("./routers/review.router");
const ContactUsRouter = require("./routers/contactUs.router");
const NoticeRouter = require("./routers/notice.router");
const path = require("path");
const uploadRouter = require("./routers/upload.router");
const { parseToken } = require("./middlewares/auth.middleware");
const AdminRouter = require("./routers/admin.router");
const { initFirebase } = require("./config/firebase.config");

const app = express();
const root = new express.Router();
initFirebase();
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded(),
  morgan(":method :url :status :res[content-length] - :response-time ms"),
  connectDB,
  parseToken,
]);
app.use("/public", express.static(path.join(__dirname, "../", "public")));
app.use("/api", root);
app.get("/", (req, res) => res.send("<h2>RH construction.</h2>"));
root.get("/", (req, res) => res.send("<h2>RH construction.</h2>"));

root.use("/blogs", BlogRouter);
root.use("/reviews", ReviewRouter);
root.use("/contact-us", ContactUsRouter);
root.use("/notices", NoticeRouter);
root.use("/upload", uploadRouter);
root.use("/admin", AdminRouter);

module.exports = app;
