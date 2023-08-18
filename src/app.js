const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const morgan = require("morgan");
const BlogRouter = require("./routers/blog.router");
const ReviewRouter = require("./routers/review.router");
const ContactUsRouter = require("./routers/contactUs.router");
const NoticeRouter = require("./routers/notice.router");

const app = express();
const root = new express.Router();

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded(),
  morgan(":method :url :status :res[content-length] - :response-time ms"),
  connectDB,
]);

app.use("/api", root);
app.get("/", (req, res) => res.send("<h2>RH construction.</h2>"));
root.get("/", (req, res) => res.send("<h2>RH construction.</h2>"));

root.use('/blogs',BlogRouter);
root.use('/reviews', ReviewRouter);
root.use('/contact-us', ContactUsRouter);
root.use('/notices', NoticeRouter);


module.exports=app;
