import express from "express";
import { signup,checkAuth } from "../controllers/users.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)

// router.get("/login",login)

// router.get("/logout",logout)

router.get("/check",protectRoute,checkAuth)


export default router;