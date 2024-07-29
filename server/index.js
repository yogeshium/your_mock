import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

//Models Import
import Mock from "./src/models/Mock.js";

//ROUTES IMPORT

//MIDDLEWARES import

const app = express();
const PORT = 8000;

//Mongoose Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/your_mock")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("mongo error: ", err));

//MIDDLEWARES//
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

const dummyData = {
  id: "lksjdf",
  title: "Exam1",
  duration: 2 * 60 * 60,
  sections: [
    {
      id: 1,
      title: "Mathematics",
      questions: [
        {
          id: 1,
          content: "How are U?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
        {
          id: 2,
          content: "How U doin?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
      ],
    },
    {
      id: 2,
      title: "Physics",
      questions: [
        {
          id: 1,
          content: "How are U?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
        {
          id: 2,
          content: "How U doin?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
      ],
    },
  ],
};


//ROUTES//
app.get("/exam/:id", (req, res) => {
  return res.status(200).json(dummyData);
});

app.post("/result",(req,res)=>{
  const userData=req.body;
  
  return res.status(200).json({success: true})
})


app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
