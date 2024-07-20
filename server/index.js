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
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

//ROUTES//
app.get("/create", async (req, res) => {});

app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
