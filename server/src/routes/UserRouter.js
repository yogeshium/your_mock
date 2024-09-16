import express from "express";

//Services Import
import * as user from "../controllers/UserController.js";

const router = express.Router();

//Signup
router.post("/signup",user.signup);

//login
router.post("/login", user.login)


export default router;
