import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import contactRouter from "../backend/router/contactRouter.js";
import cors from "cors"; // Use import instead of require
dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow cookies and credentials
  })
);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api", contactRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});