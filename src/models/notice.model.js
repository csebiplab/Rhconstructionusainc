import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    title: String,
    description: String,
    keywords: String,
  },
  {
    timestamps: true,
  }
);

const notice =
  mongoose.models.notice ||
  mongoose.model("notice", metaDataSchema);
export default notice;


