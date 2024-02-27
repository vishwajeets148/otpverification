import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

import("./db/connection.js");

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 6000;

// Load Routes
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Heello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
