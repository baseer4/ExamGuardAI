import express from "express";
import {isTestValid, mcq} from "../controllers/exam.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
//
router.post("/create/mcq",protectRoute,mcq)

router.get("/join/:id",protectRoute, isTestValid)

export default router;