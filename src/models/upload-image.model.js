import mongoose, { Schema } from "mongoose";

const UploadPictureSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});



const UploadPicture =
    mongoose.models.UploadPicture ||
    mongoose.model("UploadPicture", UploadPictureSchema);
export default UploadPicture;
