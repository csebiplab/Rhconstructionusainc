import mongoose, { Schema } from "mongoose";

const BathroomRemodellingSchema = new Schema(
    {
        title: String,
        description: String,
        keywords: String,
    },
    {
        timestamps: true,
    }
);

const BathroomRemodelling =
    mongoose.models.BathroomRemodelling ||
    mongoose.model("BathroomRemodelling", BathroomRemodellingSchema);

export default BathroomRemodelling;
