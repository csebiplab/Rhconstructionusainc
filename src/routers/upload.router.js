const { Router } = require("express");
const upload = require("../config/storage.config");
const { uploadImage } = require("../controllers/upload.controller");

const router= new Router();

router.route('/').post(upload.single('image'),uploadImage)

module.exports=router;