import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import UserRoutes from '../server/Routes/UserRoute.js'


dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));


// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

// routes
app.use("/api",UserRoutes)

export default app;
