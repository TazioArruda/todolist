import mongoose from "mongoose";

const CustomListSchema = new mongoose.Schema({
    title: {type: String},
    description:{type: String},
    bannerImg:{type: String},
    itemsCompleted:{type: String, default:0},
    user:{type: mongoose.Schema.ObjectId, ref:"User"},


})

export const CustomListModel = mongoose.model("List", CustomListSchema)