import express from "express";
import { signup,checkAuth,logout,login,profile } from "../controllers/users.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.get("/check",protectRoute,checkAuth)

router.get("/profile",protectRoute,profile)


export default router;