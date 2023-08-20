require('dotenv').config();
const obj = {};

obj.uploadImage = async (req,res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }
  const src = `${process.env.PUBLIC_URL}public/blog-images/${req.file.filename}`;
  return res.json({ src });
};

module.exports=obj;