import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

//ROUTES IMPORT
import mockRouter from "./src/routes/MockRoutes.js"

//MIDDLEWARES import

const app = express();
const PORT = 8000;

//Mongoose Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/your_mock")
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



//ROUTES//
app.use("/mock",mockRouter);



// app.get("/exam/:id", (req, res) => {
//   return res.status(200).json(dummyData);
// });

// app.post("/result",(req,res)=>{
//   const userData=req.body;
//   return res.status(200).json({success: true})
// })


app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
