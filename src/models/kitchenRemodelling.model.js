import mongoose, { Schema } from "mongoose";

const KitchenRemodellingSchema = new Schema(
    {
        title: String,
        description: String,
        keywords: String,
    },
    {
        timestamps: true,
    }
);

const KitchenRemodelling =
    mongoose.models.KitchenRemodelling ||
    mongoose.model("KitchenRemodelling", KitchenRemodellingSchema);

export default KitchenRemodelling;
