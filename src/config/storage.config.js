const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: './public/blog-images/',
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now()+file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
