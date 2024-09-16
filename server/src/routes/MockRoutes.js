import express from "express";

//Services Import
import * as mockController from "../controllers/MockController.js";

const router = express.Router();

router.get("/:id",mockController.getMockById);

router.post("/",mockController.insertMock);

export default router;
