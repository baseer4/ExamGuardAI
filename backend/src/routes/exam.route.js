import express from "express";
import {isTestValid, test,getTestQuestions} from "../controllers/exam.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create/test",protectRoute,test)

router.get("/join/:id",protectRoute, isTestValid)

router.get("/test/:id",protectRoute,getTestQuestions )


export default router;