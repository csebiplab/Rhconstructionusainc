const { Router } = require("express");
const upload = require("../config/storage.config");
const { uploadImage } = require("../controllers/upload.controller");
const { forAdmin, decodeToken } = require("../middlewares/auth.middleware");
const router= new Router();
router.route('/').post(decodeToken,forAdmin,upload.single('image'),uploadImage)

module.exports=router;