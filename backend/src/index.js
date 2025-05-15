import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import examRoutes from "./routes/exam.route.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import submitRoutes from "./routes/submit.route.js"


dotenv.config();

const app =express();
const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use("/api/auth", authRoutes)
app.use("/api", examRoutes)
app.use("/api", submitRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    connectDB()
})