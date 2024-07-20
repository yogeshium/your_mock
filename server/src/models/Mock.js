import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
})
const optionSchema = new mongoose.Schema({
    optionId: Number,
    content: String,
    images: [imageSchema]
})
const questionSchema = new mongoose.Schema({
    questionId: Number,
    content: String,
    images:[imageSchema],
    options: [optionSchema],
    answer: Number
})
const sectionSchema = new mongoose.Schema({
    sectionId: Number,
    name: String,
    timeLimit: String,
    questions:[questionSchema],

})
const mockSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    sections:[sectionSchema]
})

const Mock = mongoose.model("mock",mockSchema);

export default Mock;