import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});
const optionSchema = new mongoose.Schema({
  id: Number,
  content: String,
  images: [imageSchema],
});
const questionSchema = new mongoose.Schema({
  id: Number,
  content: String,
  duration: Number,
  images: [imageSchema],
  options: [optionSchema],
  answer: Number,
});
const sectionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title:  {
    type: String,
    required: true,
  },
  duration: Number,
  questions: [questionSchema],
});
const mockSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: Number,
  sections: [sectionSchema],
});


const Mock = mongoose.model("mock", mockSchema);

export default Mock;
