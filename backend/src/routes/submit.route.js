import express from "express";
import {submitMCQ,submitAssignment} from "../controllers/submit.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/submit/mcq", protectRoute,submitMCQ);

router.post("/submit/assignment", protectRoute,submitAssignment);

export default router;