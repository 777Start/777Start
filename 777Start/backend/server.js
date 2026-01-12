import 'dotenv/config';   // 👈 ВАЖНО: первым!
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import generateRouter from "./routes/generate.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/generate", generateRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
