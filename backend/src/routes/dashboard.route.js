import express, { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { dashboard } from "../controllers/dashboard.controller.js";

const router =express.Router()

router.get("/dashboard/all" ,protectRoute,dashboard)

export default router;