import mongoose, { Schema } from "mongoose";

const projectPictureSchema = new Schema({
    projectPeriod: {
        type: String,
        required: true,
    },
    urls: [
        {
            name: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
}, { _id: false });

const thumbPicSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, { _id: false });

const ProjectDetailsSchema = new Schema({
    projectType: {
        type: String,
        enum: ['Interior', 'Exterior'],
        required: true,
    },
    projectCat: {
        type: String,
        required: true,
    },
    projectCatHeading: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    thumbPic: thumbPicSchema,
    clientName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    completedYear: {
        type: String,
        required: true,
    },
    projectPictures: [projectPictureSchema],
});


const ProjectDetails =
    mongoose.models.ProjectDetails ||
    mongoose.model("ProjectDetails", ProjectDetailsSchema);
export default ProjectDetails;
