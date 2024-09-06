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

const customerReveiws =
  mongoose.models.customerReveiws ||
  mongoose.model("customerReveiws", metaDataSchema);
export default customerReveiws;


