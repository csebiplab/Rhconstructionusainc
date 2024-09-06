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

const ourServiceRouteMetaData =
  mongoose.models.ourServiceRouteMetaData ||
  mongoose.model("ourServiceRouteMetaData", metaDataSchema);
export default ourServiceRouteMetaData;


