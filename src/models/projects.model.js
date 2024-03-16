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

const projects =
  mongoose.models.projects ||
  mongoose.model("projects", metaDataSchema);
export default projects;


